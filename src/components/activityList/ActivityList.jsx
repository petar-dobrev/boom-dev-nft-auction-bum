import classNames from "classnames";

import { Container, Stack } from "@mui/material";
import ActivityListItem from "../activityListItem/ActivityListItem";

import styles from "./ActivityList.module.scss";

export default function ActivityList({ items }) {
  return (
    <Container className={classNames(styles["activity-list"])}>
      <Stack direction="column" spacing={2}>
        {items.map((item) => (
          <ActivityListItem
            key={Math.floor(Math.random() * Date.now()).toString(16)}
            user={item.user}
            created_at={item.created_at}
            nft={item.nft}
            type={item.type}
          />
        ))}
      </Stack>
    </Container>
  );
}
