import Result from "./Result";
import Summary from "./Summary";
import styles from "./container.module.css";

export default function Container() {
  return (
    <div>
      <div className={styles.container}>
        <Result />
        <Summary />
      </div>
    </div>
  );
}
