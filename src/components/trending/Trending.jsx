import { useState } from "react";

import {
  Grid,
  Container,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Card from "../card/Card";

import styles from "./Trending.module.scss";
import classNames from "classnames";

export default function Trending({
  cards = [
    {
      name: "Ivy",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 1,
      currency: "ETH",
    },
    {
      name: "Judie",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 2.3,
      currency: "ETH",
    },
    {
      name: "Juniper",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 5,
      currency: "ETH",
    },
    {
      name: "Maple",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 10,
      currency: "ETH",
    },
  ],
}) {
  const [selectedDateRange, setSelectedDateRange] = useState("This week");

  const handleChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid
        container
        alignContent="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Grid item>
          <Typography variant="h2">Trending</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              variant="outlined"
              value={selectedDateRange}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="This week">This week</MenuItem>
              <MenuItem value="This month">This month</MenuItem>
              <MenuItem value="Last week">Last week</MenuItem>
              <MenuItem value="Last month">Last month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="space-between">
        {cards.map((card) => (
          <Grid item key={Math.floor(Math.random() * Date.now()).toString(16)}>
            <Card
              name={card.name}
              user={card.user}
              mediaUrl={card.mediaUrl}
              price={card.price}
              currency={card.currency}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
