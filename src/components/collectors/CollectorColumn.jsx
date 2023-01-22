import classNames from "classnames";

import styles from "./CollectorColumn.module.scss";

import Collector from "./Collector";

export default function CollectorColumn({
  items = [
    {
      name: "",
      nftsCount: 0,
      avatar: "",
      verifed: true,
      id: 0,
    },
  ],
}) {
  return (
    <div className={classNames(styles.columns)}>
      {items.map((item, index) => (
        <Collector
          key={item.id}
          name={item.name}
          nftsCount={item.nftsCount}
          avatar={item.avatar}
          verified={item.verifed}
          type={index % 2 == 0 ? "darker" : "lighter"}
        />
      ))}
    </div>
  );
}
