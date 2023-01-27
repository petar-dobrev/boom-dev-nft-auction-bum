import classNames from "classnames";
import { formatDistance, parseISO } from "date-fns";

import { Container, Grid, Stack } from "@mui/material";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";

import styles from "./ActivityListItem.module.scss";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        spacing={2}
        className={classNames(styles["list-item"])}
      >
        <Avatar size={56} verified={user.verified} url={user.avatar.url} />
        <Stack>
          <p className={classNames(styles.text)}>
            <span className={classNames(styles.user)}>{user.username}</span>{" "}
            {type == "like" ? "liked" : "bought"}{" "}
            <Link href={`/product/${nft.id}`} color="secondary">
              "{nft.name}"
            </Link>{" "}
            by{" "}
            <Link href={`/profile/${user.id}`} color="secondary">
              {nft.owner.username}
            </Link>
          </p>
          <p className={classNames(styles["text-secondary"])}>
            {formatDistance(parseISO(created_at), new Date())} ago
          </p>
        </Stack>
      </Stack>
    </Container>
  );
}
