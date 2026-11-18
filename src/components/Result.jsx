import styles from "./result.module.css";
export default function Result() {
  return (
    <div className={styles.container}>
      <div className={styles.headText}>
        <p>Your Result</p>
      </div>
      <div className={styles.circle}>
        <p className={styles.first}>76</p>
        <p className={styles.second}>of 100</p>
      </div>
      <div className={styles.great}>Great</div>
      <div className={styles.lastText}>
        <p>You scored higer than 65% of the people who have taken this test</p>
      </div>
    </div>
  );
}
