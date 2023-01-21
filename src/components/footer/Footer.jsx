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
            <p className={classNames(styles.rightsText)}>
              Bum All Rights Reserved 2021
            </p>
          </Grid>
          <Grid item>
            <Button className={classNames(styles.textButton)}>
              Privacy Policy
            </Button>
            <Button className={classNames(styles.textButton)}>
              Cookie Policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
