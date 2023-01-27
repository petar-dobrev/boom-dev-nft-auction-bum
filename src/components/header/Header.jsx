import {
  Grid,
  Container,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import Logo from "../logo/Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <Container className={classNames(styles.container)} maxWidth="false">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <TextField
            className={classNames(styles["search-field"])}
            id="search-field"
            placeholder="Find items, users and activities"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classNames(styles["search-icon"])} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button className={classNames(styles["text-button"])} href="/">
            Home
          </Button>
          <Button
            className={classNames(styles["text-button"])}
            href="/activity"
          >
            Activity
          </Button>
          <Button variant="contained" href="/explore">
            Explore
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
