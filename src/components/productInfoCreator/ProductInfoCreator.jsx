import classNames from "classnames";
import User from "../user/User";
import styles from "./ProductInfoCreator.module.scss";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classNames(styles["product-info-creator"])}>
      <div className={classNames(styles.title)}>
        <p>Creator</p>
      </div>
      <div className={classNames(styles["user-container"])}>
        <User name={name} avatar={avatar} verified={verified} size={40} />
      </div>
    </div>
  );
}
// className={classNames(styles.productImage)}
