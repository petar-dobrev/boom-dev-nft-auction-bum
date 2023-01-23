import classNames from "classnames";
import { Chip } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./ProductInfoStatus.module.scss";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles.status)}>
      <Chip
        label="LIVE"
        variant="filled"
        color="secondary"
        icon={<CircleIcon fontSize="10px" />}
        className={classNames(styles["product-info-status"])}
      />
    </div>
  );
}
