import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import { Typography } from "@mui/material";
import styles from "./ProfileUser.module.scss";

export default function ProfileUser({ name, info, avatar, verified }) {

  
  return (
    <div className={classNames(styles["profile-user"])}>
      <Avatar url={avatar} verified={verified} size={192} />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="body1">{info}</Typography>
    </div>
  );
}
