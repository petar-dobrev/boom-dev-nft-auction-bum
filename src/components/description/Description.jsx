import classNames from "classnames";
import { Typography } from "@mui/material";
import styles from "./Hero.module.scss";

export default function Hero({ text, image }) {
  return (
    <div className={classNames(styles.descripyion)}>
      <Typography variant="body1" className={classNames(styles.text)}>
        {text}
      </Typography>
      <img src={image} className={classNames(styles.image)} />
    </div>
  );
}
