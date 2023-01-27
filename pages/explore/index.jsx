import { useState, useEffect } from "react";

import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/exploreTitle/ExploreTitle";
import ExploreFilters from "../../src/components/exploreFilters/ExploreFilters";
import Card from "../../src/components/card/Card";
import Footer from "../../src/components/footer/Footer";

import { Container, Grid } from "@mui/material";

export default function Explore() {
  const [nfts, setNfts] = useState([]);
  const [filters, setFilters] = useState({});

  const [sortMethod, setSortMethod] = useState("");
  const [filterPriceMethod, setFilterPriceMethod] = useState("");

  const handleChangeSort = (event) => {
    console.log(event.target.value);
    setSortMethod(event.target.value);
  };
  const handleChangeFilterPrice = (event) => {
    setFilterPriceMethod(event.target.value);
  };

  const sortMethods = {
    "": { method: (a, b) => null },
    1: { method: (a, b) => new Date(a.created_at) - new Date(b.created_at) },
    2: { method: (a, b) => new Date(b.created_at) - new Date(a.created_at) },
    3: { method: (a, b) => (a.name > b.name ? 1 : -1) },
    4: { method: (a, b) => (a.name > b.name ? -1 : 1) },
    5: { method: (a, b) => a.price - b.price },
    6: { method: (a, b) => b.price - a.price },
  };

  const filterPriceMethods = {
    "": { method: (nft) => nft.price },
    7: { method: (nft) => nft.price <= 1 },
    8: { method: (nft) => nft.price >= 1 && nft.price <= 4 },
    9: { method: (nft) => nft.price >= 4 && nft.price <= 10 },
  };

  const apiUrl = process.env.apiUrl;

  useEffect(() => {
    fetch(`${apiUrl}/explore`)
      .then((response) => response.json())
      .then((data) => {
        const dataNfts = data.nfts.filter(
          filterPriceMethods[filterPriceMethod].method
        );
        dataNfts.sort(sortMethods[sortMethod].method);
        setNfts(dataNfts);
        setFilters(data.filters);
      });
  }, [sortMethod, filterPriceMethod]);
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ my: 2 }}
        >
          <Grid item>
            <ExploreTitle text="Explore" />
          </Grid>
          <Grid item>
            <ExploreFilters
              filters={filters}
              sortMethod={sortMethod}
              filterPriceMethod={filterPriceMethod}
              handleChangeSort={handleChangeSort}
              handleChangeFilterPrice={handleChangeFilterPrice}
            />
          </Grid>
        </Grid>
        <Grid container gap={2} justifyContent="space-between" sx={{ my: 3 }}>
          {nfts.map((nft) => (
            <Grid item>
              <Card
                name={nft.name}
                likes={nft.likes}
                mediaUrl={nft.source.url}
                user={nft.owner}
                price={nft.price}
                currency={nft.currency}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
