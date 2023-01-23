import classNames from "classnames";
import styles from "./ProductInfoPrice.module.scss";

export default function ProductInfoPrice({ ammount = 0, currency }) {
  return (
    <div className={classNames(styles["product-info-price"])}>
      <p>
        On sale for {ammount} {currency}
      </p>
    </div>
  );
}
