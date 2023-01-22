import classNames from "classnames";
import { Grid } from "@mui/material";
import styles from "./Step.module.scss";

export default function Step({ number, title, description }) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      className={classNames(styles.step)}
    >
      <Grid item className={classNames(styles.number)}>
        <p>{number}</p>
      </Grid>
      <Grid item className={classNames(styles.content)}>
        <h3 className={classNames(styles.title)}>{title}</h3>
        <p className={classNames(styles.description)}>{description}</p>
      </Grid>
    </Grid>
  );
}
