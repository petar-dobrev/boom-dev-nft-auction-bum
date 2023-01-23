import classNames from "classnames";
import styles from "./ProductImage.module.scss";

export default function ProductImage({ url }) {
  return <img src={url} className={classNames(styles.productImage)} />;
}
