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
            className={classNames(styles.searchField)}
            id="search-field"
            placeholder="Find items, users and activities"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className={classNames(styles.searchIcon)} />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button className={classNames(styles.textButton)}>Home</Button>
          <Button className={classNames(styles.textButton)}>Activity</Button>
          <Button variant="contained">Explore</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
