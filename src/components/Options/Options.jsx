import styles from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
  <div className={styles.options}>
    <button onClick={() => onLeaveFeedback("good")} className={styles.button}>
      Good
    </button>
    <button
      onClick={() => onLeaveFeedback("neutral")}
      className={styles.button}
    >
      Neutral
    </button>
    <button onClick={() => onLeaveFeedback("bad")} className={styles.button}>
      Bad
    </button>
    {totalFeedback > 0 && (
      <button onClick={onReset} className={`${styles.button} ${styles.reset}`}>
        Reset
      </button>
    )}
  </div>
);


export default Options;
