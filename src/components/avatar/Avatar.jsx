import classNames from "classnames";
import styles from "./Avatar.module.scss";

export default function Avatar({ size = "90", verified = false, url }) {
  return (
    <div
      style={{ width: size + "px", height: size + "px" }}
      className={classNames(styles.avatar)}
    >
      <img src={url} alt="" className={classNames(styles.image)} />
      {verified && (
        <img src="/images/verified.svg" className={classNames(styles.badge)} />
      )}
    </div>
  );
}
