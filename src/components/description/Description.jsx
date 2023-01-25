import classNames from "classnames";
import { Typography } from "@mui/material";
import styles from "./Description.module.scss";

export default function Description({ text, image }) {
  return (
    <div className={classNames(styles.description)}>
      <Typography variant="body1" className={classNames(styles.text)}>
        {text}
      </Typography>
      <div className={classNames(styles["image-container"])}>
        {image && <img src={image} className={classNames(styles.image)} />}
      </div>
    </div>
  );
}
