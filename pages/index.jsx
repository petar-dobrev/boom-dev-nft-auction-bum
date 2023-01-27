import { useState, useEffect } from "react";

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
  const [trendingCards, setTrendingCards] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [collectorFilters, setCollectorFilters] = useState([]);
  const [auctions, setAuctions] = useState([]);
  const [auctionFilters, setAuctionFilters] = useState([]);
  const apiUrl = process.env.apiUrl;

  useEffect(() => {
    fetch(`${apiUrl}/featured`)
      .then((response) => response.json())
      .then((data) => setFeaturedCards(data.nfts));
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/trending`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingCards(data.nfts);
        setTrendingFilters(data.filters);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/top-collectors`)
      .then((response) => response.json())
      .then((data) => {
        data.users.sort((a, b) => b.nftCount - a.nftCount);
        setCollectors(data.users);
        setCollectorFilters(data.filters);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/live-auctions`)
      .then((response) => response.json())
      .then((data) => {
        setAuctions(data.nfts);
        setAuctionFilters(data.filters);
      });
  }, []);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards} filters={trendingFilters} />
      <TopCollectors collectors={collectors} filters={collectorFilters} />
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
      <Auctions cards={auctions} filters={auctionFilters} />
      <Footer />
    </>
  );
}
