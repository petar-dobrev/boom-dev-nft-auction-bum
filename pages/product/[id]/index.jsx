import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/productContainer/ProductContainer";
import Footer from "../../../src/components/footer/Footer";

import dataNfts from "../../../data/nfts.json";

export default function Product() {
  const { query, isReady } = useRouter();

  const [nft, setNft] = useState({});

  useEffect(() => {
    const nftSelected = dataNfts.filter((nft) => nft.id == query.id);
    setNft(nftSelected[0] || {});
  }, [isReady]);

  const {
    name,
    owner,
    price,
    currency,
    likes,
    auction_end,
    details,
    source,
    bids,
  } = nft || {};

  return Object.keys(nft).length == 0 ? (
    <div>Loading</div>
  ) : (
    <>
      <Header />
      <ProductContainer
        name={name}
        owner={owner}
        price={price}
        currency={currency}
        likes={likes}
        details={details}
        source={source}
        auction_end={auction_end}
        bids={bids}
      />
      <Footer />
    </>
  );
}
