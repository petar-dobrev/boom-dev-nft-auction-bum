import classNames from "classnames";

import { Container, Grid, Typography } from "@mui/material";
import ProfileCollectionFilters from "../profileCollectionFilters/ProfileCollectionFilters ";
import Card from "../card/Card";

import styles from "./ProfileCollection.module.scss";

export default function ProfileCollection({ user, filter, items }) {
  return (
    <Container
      className={classNames(styles["profile-collection"])}
      maxWidth="xl"
    >
      <Grid container alignItems="center">
        <Grid item xs={3}>
          <Typography variant="h3">Collection</Typography>
        </Grid>
        <Grid item xs={9}>
          <ProfileCollectionFilters filters={filter} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ my: 2 }}>
        {items.map((item) => (
          <Grid
            item
            xs={3}
            key={Math.floor(Math.random() * Date.now()).toString(16)}
          >
            <Card
              name={item.name}
              likes={item.likes}
              mediaUrl={item.source.url}
              user={user}
              price={item.price}
              currency={item.currency}
              timeLeft={item.timeLeft}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
