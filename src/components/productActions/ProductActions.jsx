import classNames from "classnames";
import styles from "./ProductActions.module.scss";

import { Grid, Button } from "@mui/material";

export default function ProductActions({
  isLive = false,
  currency = "ETH",
  buyAmmount = 20,
  bidAmmount = 1,
  onBuy,
  onBid,
}) {
  return (
    <div className={classNames(styles["product-actions"])}>
      <Grid container alignContent="center" justifyContent="space-between">
        <Grid item>
          <Button
            disabled
            onClick={onBuy}
            color="secondary"
            variant="contained"
            sx={{
              "&.Mui-disabled": {
                background: "#292931",
                color: "#86868A",
              },
            }}
          >
            Buy for {buyAmmount} {currency}
          </Button>
        </Grid>
        <Grid item>
          <Button
            disabled
            onClick={onBid}
            color="secondary"
            variant="outlined"
            sx={{
              "&.Mui-disabled": {
                background: "none",
                color: "#86868A",
                border: "2px solid #86868A",
              },
            }}
          >
            Place bid for {bidAmmount} {currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
