import classNames from "classnames";
import { Grid, Button } from "@mui/material";
import Step from "./Step";
import styles from "./How.module.scss";

export default function How({ description, title, items = [], link }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Grid
        container
        flexDirection="column"
        className={classNames(styles.container)}
      >
        <Grid item className={classNames(styles.content)}>
          <h2 className={classNames(styles.title)}>{title}</h2>
          <p className={classNames(styles.text)}>{description}</p>
          <Button
            variant="contained"
            className={classNames(styles.button)}
            href={link}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item className={classNames(styles.steps)}>
          {items.map((item, index) => (
            <Step
              number={index + 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
