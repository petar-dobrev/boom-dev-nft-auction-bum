import { Grid, Container } from "@mui/material";
import Card from "../card/Card";

import styles from "./Trending.module.scss";
import classNames from "classnames";

export default function Trending({ cards = [] }) {
  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid container spacing={2}>
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
