import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/exploreTitle/ExploreTitle";
import ExploreFilters from "../../src/components/exploreFilters/ExploreFilters";
import Card from "../../src/components/card/Card";
import Footer from "../../src/components/footer/Footer";

import { Container, Grid } from "@mui/material";

import dataNfts from "../../data/nfts.json";

export default function Explore() {
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
            <ExploreFilters />
          </Grid>
        </Grid>
        <Grid
          container
          gap={2}
          justifyContent="space-between"
          sx={{ height: "100vh" }}
        >
          {dataNfts.map((nft) => (
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
