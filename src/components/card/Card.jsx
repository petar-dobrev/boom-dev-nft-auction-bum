import PropTypes from "prop-types";
import classNames from "classnames";
import millify from "millify";

import { Card as MuiCard, Chip, CardContent, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import Countdown, { zeroPad } from "react-countdown";
import Avatar from "../avatar/Avatar";

import styles from "./Card.module.scss";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = { avatar: { url: "" }, verified: false },
  price = "",
  currency = "",
  timeLeft,
}) {
  const handleClick = () => {
    console.log("Like+");
  };

  const sxBgLive = {
    backgroundColor: theme.palette.secondary.muted,
  };

  const badge = (
    <div className={classNames(styles.badge)}>
      <CircleIcon fontSize="10px" />
      <p className={classNames(styles.badgeText)}>LIVE</p>
    </div>
  );

  const countdown = ({ hours, minutes, seconds }) => (
    <div className={classNames(styles.countdown)}>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <MuiCard
        className={classNames(styles.card)}
        sx={{
          maxWidth: 340,
          ...(timeLeft && sxBgLive),
        }}
      >
        <CardContent>
          <Avatar url={user.avatar.url} verified={user.verified} size="33" />
          <div className={classNames(styles.mediaContainer)}>
            {timeLeft && badge}
            <img src={mediaUrl} className={classNames(styles.media)} />
            {timeLeft && (
              <Countdown date={Date.now() + timeLeft} renderer={countdown} />
            )}
          </div>
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
