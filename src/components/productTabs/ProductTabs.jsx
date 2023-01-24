import classNames from "classnames";
import { useState } from "react";
import { formatDistance, parseISO } from "date-fns";

import {
  Tabs,
  Tab,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import User from "../user/User";

import styles from "./ProductTabs.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductTabs({
  text,
  bids = [
    {
      user: {
        avatar: "",
        name: "",
        verified: false,
      },
      ammount: 0,
      date: "",
    },
    {
      user: {
        avatar: "",
        name: "",
        verified: true,
      },
      ammount: 0,
      date: "",
    },
  ],
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classNames(styles["product-tabs"])}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Item One"
            {...a11yProps(0)}
            className={classNames(styles["tab-details"])}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
            className={classNames(styles["tab-bids"])}
          />
        </Tabs>
      </Box>
      <TabPanel
        value={value}
        index={0}
        className={classNames(styles["tab-panel-details"])}
      >
        {text}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer>
          <Table
            aria-label="simple table"
            sx={{
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
          >
            <TableBody>
              {bids.map((bid) => (
                <TableRow
                  key={Math.floor(Math.random() * Date.now()).toString(16)}
                  className={classNames(styles["table-row"])}
                  sx={{ border: 0 }}
                >
                  <TableCell>
                    <User
                      name={bid.user.name}
                      avatar={bid.user.avatar}
                      verified={bid.user.verified}
                    />
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classNames(styles["bid-cell"])}
                  >
                    {bid.ammount} ETH
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classNames(styles["date-cell"])}
                  >
                    {formatDistance(parseISO(bid.date), new Date())}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  ); 
}
