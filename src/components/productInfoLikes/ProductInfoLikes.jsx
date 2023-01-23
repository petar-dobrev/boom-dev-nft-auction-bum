import classNames from "classnames";
import millify from "millify";

import { Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import styles from "./ProductInfoLikes.module.scss";

export default function ProductInfoLikes({ ammount = 0 }) {
  const handleClick = () => {
    console.log("Like+");
  };
  return (
    <div className={classNames(styles["product-info-likes"])}>
      <Chip
        label={millify(ammount)}
        variant="outlined"
        color="secondary"
        icon={<FavoriteIcon />}
        className={classNames(styles.likes)}
        onClick={handleClick}
      />
    </div>
  );
}
