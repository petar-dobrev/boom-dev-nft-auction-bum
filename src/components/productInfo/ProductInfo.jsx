import classNames from "classnames";

import { Grid, Stack } from "@mui/material";
import ProductInfoTitle from "../productInfoTitle/ProductInfoTitle";
import ProductInfoPrice from "../productInfoPrice/ProductInfoPrice";
import ProductInfoStatus from "../productInfoStatus/ProductInfoStatus";
import ProductInfoLikes from "../productInfoLikes/ProductInfoLikes";
import ProductInfoCreator from "../productInfoCreator/ProductInfoCreator";
import ProductInfoTimer from "../productInfoTimer/ProductInfoTimer";

import styles from "./ProductInfo.module.scss";

export default function ProductInfo({
  title = "",
  creator = { name: "", avatar: "", verified: false },
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title} />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 1 }}
      >
        <div>
          <ProductInfoPrice ammount={price} currency={currency} />
        </div>

        <Stack direction="row" spacing="12px">
          {isLive && (
            <div>
              <ProductInfoStatus />
            </div>
          )}
          <ProductInfoLikes ammount={likes} />
        </Stack>
      </Stack>
      <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
        <ProductInfoCreator
          name={creator.name}
          avatar={creator.avatar}
          verified={creator.verified}
        />
        <ProductInfoTimer onTimeEnd={onTimeEnd} timeEnd={timeEnd} />
      </Grid>
    </div>
  );
}
