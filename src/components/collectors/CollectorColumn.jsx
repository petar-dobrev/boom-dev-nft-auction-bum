import classNames from "classnames";

import styles from "./CollectorColumn.module.scss";

import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className={classNames(styles.columns)}>
      {items.map((item, index) => (
        <Collector
          key={item.id}
          name={item.username}
          nftsCount={item.nftsCount}
          avatar={item.avatar.url}
          verified={item.verified}
          type={index % 2 == 0 ? "darker" : "lighter"}
        />
      ))}
    </div>
  );
}
