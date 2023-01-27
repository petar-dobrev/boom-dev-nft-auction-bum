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

export default function ExploreFilters({
  filters,
  sortMethod,
  filterPriceMethod,
  handleChangeSort,
  handleChangeFilterPrice,
}) {
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
            value={sortMethod}
            onChange={handleChangeSort}
            label="Sort by"
          >
            {Object.keys(filters).length > 0 &&
              filters.sort.map((filter) => (
                <MenuItem value={filter.value}>{filter.label}</MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl className={classNames(styles["select-label-sort"])}>
          <InputLabel id="select-label-sort-by-price">Price range</InputLabel>
          <Select
            labelId="select-label-sort-by-price"
            id="select-sort-by-price"
            variant="outlined"
            value={filterPriceMethod}
            onChange={handleChangeFilterPrice}
            label="Price range"
          >
            {Object.keys(filters).length > 0 &&
              filters.price.map((filter) => (
                <MenuItem value={filter.value}>{filter.label}</MenuItem>
              ))}
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
