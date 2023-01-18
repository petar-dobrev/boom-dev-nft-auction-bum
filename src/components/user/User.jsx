import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import styles from "./User.module.scss";

export default function User(props) {
  const {
    name = "",
    info = "",
    avatar = "",
    size = "55",
    verified = false,
  } = props;

  return (
    <div className={classNames(styles.user)}>
      <Avatar size={size} url={avatar} verified={verified} />
      <div className={classNames(styles.userContent)}>
          <p className={classNames(styles.name)}>{name}</p>
          <p className={classNames(styles.info)}>{info}</p>
      </div>
    </div>
  );
}
