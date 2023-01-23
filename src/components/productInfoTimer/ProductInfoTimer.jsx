import classNames from "classnames";
import Countdown, { zeroPad } from "react-countdown";

import styles from "./ProductInfoTimer.module.scss";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const countdown = ({ hours, minutes, seconds }) => (
    <div className={classNames(styles.countdown)}>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </div>
  );

  const timerIsActive = timeEnd != null || timeEnd;

  return timerIsActive ? (
    <div className={classNames(styles["product-info-timer"])}>
      <div className={classNames(styles.title)}>
        <p>Ends in</p>
      </div>
      <div className={classNames(styles.timer)}>
        <Countdown date={timeEnd} renderer={countdown} onComplete={onTimeEnd} />
      </div>
    </div>
  ) : (
    <></>
  );
}
