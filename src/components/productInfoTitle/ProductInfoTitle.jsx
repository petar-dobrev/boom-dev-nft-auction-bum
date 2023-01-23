import classNames from "classnames";
import { Typography } from "@mui/material";
import styles from "./ProductInfoTitle.module.scss";

export default function ProductInfoTitle({ text }) {
  return (
    <div className={classNames(styles.productInfoTitle)}>
      <Typography variant="h1" className={classNames(styles.title)}>
        {text}
      </Typography>
    </div>
  );
}
