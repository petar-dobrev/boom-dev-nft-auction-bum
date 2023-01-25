import { useState, useEffect } from "react";

import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, settrendingCards] = useState([]);
  const [topCollectors, setTopCollectors] = useState([]);

  useEffect(() => {
    setFeaturedCards(dataFeatured);
  }, [dataFeatured]);

  useEffect(() => {
    settrendingCards(dataTrending);
  }, [dataTrending]);

  useEffect(() => {
    setTopCollectors(dataUsers);
  }, [dataUsers]);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} />
      <TopCollectors collectors={topCollectors} />
      <How
        title="how it works"
        description="Discover, collect, and sell extraordinary NFTs
on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM."
        link="/"
        items={[
          {
            title: "Digital Currency",
            description:
              "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
          },
          {
            title: "Crypto Wallet",
            description:
              "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
          },
          {
            title: "BUM.",
            description:
              "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. ",
          },
        ]}
      />
      <Auctions cards={trendingCards} />
      <Footer />
    </>
  );
}
