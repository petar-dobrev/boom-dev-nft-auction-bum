import { Grid, Container, Button } from "@mui/material";
import classNames from "classnames";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Logo type="muted" />
          </Grid>
          <Grid item>
            <p className={classNames(styles["rights-text"])}>
              Bum All Rights Reserved 2021
            </p>
          </Grid>
          <Grid item>
            <Button className={classNames(styles["text-button"])}>
              Privacy Policy
            </Button>
            <Button className={classNames(styles["text-button"])}>
              Cookie Policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
