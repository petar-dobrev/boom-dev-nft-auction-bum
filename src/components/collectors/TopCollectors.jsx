import { useState } from "react";
import classNames from "classnames";
import { chunk } from "lodash";

import CollectorColumn from "./CollectorColumn";

import styles from "./TopCollectors.module.scss";

import {
  Grid,
  Container,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

export default function TopCollectors({ collectors = [] }) {
  const [selectedDateRange, setSelectedDateRange] = useState("This week");

  const handleChange = (event) => {
    setSelectedDateRange(event.target.value);
  };

  collectors.map(
    (collector) =>
      (collector.id = Math.floor(Math.random() * Date.now()).toString(16))
  );

  const splitCollectors = chunk(collectors, 3);

  return (
    <Container className={classNames(styles.container)} maxWidth="xl">
      <Grid
        container
        alignContent="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Grid item>
          <Typography variant="h2">Top Collectors</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              variant="outlined"
              value={selectedDateRange}
              onChange={handleChange}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="This week">This week</MenuItem>
              <MenuItem value="This month">This month</MenuItem>
              <MenuItem value="Last week">Last week</MenuItem>
              <MenuItem value="Last month">Last month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container alignContent="center" justifyContent="space-between">
        {splitCollectors.map((collectors) => (
          <Grid item key={Math.floor(Math.random() * Date.now()).toString(16)}>
            <CollectorColumn items={collectors} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
