import PropTypes from "prop-types";
import classNames from "classnames";
import millify from "millify";

import { Card as MuiCard, Chip, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "../avatar/Avatar";

import styles from "./Card.module.scss";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Card(props) {
  const {
    name = "",
    likes = "",
    mediaUrl = "",
    user = { avatar: { url: "" }, verified: false },
    price = "",
    currency = "",
  } = props;

  const handleClick = () => {
    console.log("Like+");
  };

  return (
    <ThemeProvider theme={theme}>
      <MuiCard className={classNames(styles.card)} sx={{ maxWidth: 340 }}>
        <CardContent>
          <Avatar url={user.avatar.url} verified={user.verified} size="33" />
          <img src={mediaUrl} className={classNames(styles.media)} />
          <div className={classNames(styles.cardText)}>
            <div>
              <Typography className={classNames(styles.title)}>
                {name}
              </Typography>
              <Typography
                className={classNames(styles.price)}
                color="secondary"
              >
                {price} {currency}
              </Typography>
            </div>
            <Chip
              label={millify(likes, { lowercase: true })}
              variant="outlined"
              color="secondary"
              icon={<FavoriteIcon />}
              className={classNames(styles.likes)}
              onClick={handleClick}
            />
          </div>
        </CardContent>
      </MuiCard>
    </ThemeProvider>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  likes: PropTypes.number,
  mediaUrl: PropTypes.string,
  user: PropTypes.shape({
    avatar: PropTypes.shape({
      url: PropTypes.string,
    }),
    verified: PropTypes.bool,
  }),
  price: PropTypes.string,
  currency: PropTypes.string,
};
