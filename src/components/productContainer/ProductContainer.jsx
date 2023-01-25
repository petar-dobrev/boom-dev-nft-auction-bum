import classNames from "classnames";
import { isBefore, parseISO } from "date-fns";

import { Container, Grid } from "@mui/material";
import ProductImage from "../productImage/ProductImage";
import ProductInfo from "../productInfo/ProductInfo";
import ProductTabs from "../productTabs/ProductTabs";
import ProductActions from "../productActions/ProductActions";

import styles from "./ProductContainer.module.scss";

export default function ProductContainer({
  name = "",
  owner = {
    username: "J",
    verifed: false,
    avatar: {
      url: "",
    },
  },
  price = 0,
  currency = "",
  likes = 0,
  auction_end = "",
  details = "",
  source = {
    url: "",
  },
  bids = [
    {
      user: {
        avatar: "",
        name: "",
        verified: true,
      },
      amount: 0,
      date: "",
    },
  ],
}) {
  const onTimeEnd = () => {
    console.log("Auction ended!");
  };
  const onBuy = () => {
    console.log("You bought the NFT!");
  };
  const onBid = () => {
    console.log("You placed your bid!");
  };
  const isLive = isBefore(new Date(), parseISO(auction_end));
  return (
    <Container
      maxWidth="xl"
      className={classNames(styles["product-container"])}
    >
      <Grid container gap={7}>
        <Grid item xs={6}>
          <ProductImage url={source.url} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfo
            title={name}
            creator={{
              name: owner.username,
              avatar: owner.avatar.url,
              verified: owner.verifed,
            }}
            price={price}
            currency={currency}
            likes={likes}
            timeEnd={auction_end}
            onTimeEnd={onTimeEnd}
            isLive={isLive}
          />
          <ProductTabs text={details} bids={bids} />
          <ProductActions
            currency={currency}
            buyAmmount={price}
            bidAmmount={1}
            onBid={onBid}
            onBuy={onBuy}
            isLive={isLive}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
