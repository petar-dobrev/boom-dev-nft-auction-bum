import classNames from "classnames";
import { Typography } from "@mui/material";
import styles from "./Hero.module.scss";

export default function Hero({ text, capitalize }) {
  return (
    <div className={classNames(styles.hero)}>
      <Typography
        variant="h1"
        className={classNames(styles.text, capitalize && styles.capitalize)}
      >
        {text}
      </Typography>
    </div>
  );
}
