import classNames from "classnames";
import { useState } from "react";

import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import styles from "./ExploreFilters.module.scss";

export default function ExploreFilters({ filters }) {
  const [sortByName, setSortByName] = useState("");
  const [sortByPriceRange, setSortByPriceRange] = useState("");

  const handleChangeSortByName = (event) => {
    setSortByName(event.target.value);
  };
  const handleChangeSortPriceRange = (event) => {
    setSortByPriceRange(event.target.value);
  };

  return (
    <Container maxWidth="xl" className={classNames(styles["activity-filters"])}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <FormControl className={classNames(styles["select-label-sort"])}>
          <InputLabel id="select-label-sort-by-name">Sort by</InputLabel>
          <Select
            labelId="select-label-sort-by-name"
            id="select-sort-by-name"
            variant="outlined"
            value={sortByName}
            onChange={handleChangeSortByName}
            label="Sort by"
          >
            <MenuItem value={1}>Name (Ascending)</MenuItem>
            <MenuItem value={2}>Name (Descending)</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classNames(styles["select-label-sort"])}>
          <InputLabel id="select-label-sort-by-price">Price range</InputLabel>
          <Select
            labelId="select-label-sort-by-price"
            id="select-sort-by-price"
            variant="outlined"
            value={sortByPriceRange}
            onChange={handleChangeSortPriceRange}
            label="Price range"
          >
            <MenuItem value={3}>0.3 - 0.5 ETH</MenuItem>
            <MenuItem value={4}>0.5 - 2 ETH</MenuItem>
            <MenuItem value={5}>2- 3 ETH</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className={classNames(styles["search-field"])}
          id="profile-search-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classNames(styles["search-icon"])} />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Stack>
    </Container>
  );
}