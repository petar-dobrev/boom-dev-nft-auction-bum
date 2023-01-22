import classNames from "classnames";

import User from "../user/User";

import styles from "./Collector.module.scss";

export default function Collector({ name, avatar, verified, nftsCount, type }) {
  return (
    <div
      className={classNames(
        styles.container,
        type === "darker" ? styles.darker : styles.lighter
      )}
    >
      <User
        name={name}
        info={`${nftsCount} items`}
        avatar={avatar}
        verified={verified}
        className={classNames(styles.user)}
      />
    </div>
  );
}
