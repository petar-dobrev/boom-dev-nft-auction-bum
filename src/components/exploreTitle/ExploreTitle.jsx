import classNames from "classnames";

import { Typography } from "@mui/material";

import styles from "./ExploreTitle.module.scss";

export default function ExploreTitle({ text }) {
  return (
    <Typography variant="h1" className={classNames(styles["explore-title"])}>
      {text}
    </Typography>
  );
}
