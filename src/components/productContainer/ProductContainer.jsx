import classNames from "classnames";
import { isBefore, parseISO } from "date-fns";

import { Container, Grid } from "@mui/material";
import ProductImage from "../productImage/ProductImage";
import ProductInfo from "../productInfo/ProductInfo";
import ProductTabs from "../productTabs/ProductTabs";
import ProductActions from "../productActions/ProductActions";

import styles from "./ProductContainer.module.scss";

export default function ProductContainer({
  name = "Ergonomic Concrete Tuna",
  owner = {
    username: "Justen_King18",
    verifed: false,
    avatar: {
      url: "/images/avatar.png",
    },
  },
  price = 0.726,
  currency = "ETH",
  likes = 1205,
  auction_end = "2023-01-25T11:00:48.511Z",
  details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus risus, suscipit sit amet aliquam ut, vehicula vitae ipsum. Duis viverra lorem lacus, non ullamcorper neque laoreet vitae. Nunc a posuere velit. Etiam sed commodo tortor, ac pretium libero. Integer in feugiat justo. Proin ut dignissim risus. Proin dignissim ante pharetra enim tempus varius. Nullam justo elit, mattis eu lacus ut, volutpat vestibulum dui. Morbi varius magna luctus tellus rutrum ullamcorper.",
  source = {
    url: "https://project-4-api.boom.dev/uploads/0x7d9debcf75a71bbb5c533804c9845d313fe3f6aa_ec98dd79b9.jpg",
  },
  bids = [
    {
      user: {
        avatar: "/images/avatar.png",
        name: "hrisi",
        verified: true,
      },
      amount: 30,
      date: "2021-10-22T08:29:23.382Z",
    },
    {
      user: {
        avatar: "/images/avatar.png",
        name: "maxi",
        verified: true,
      },
      amount: 1000,
      date: "2021-10-22T08:29:23.382Z",
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
  console.log(new Date());
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
