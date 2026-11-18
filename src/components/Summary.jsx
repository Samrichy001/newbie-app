import { useState } from "react";
import styles from "./summary.module.css";
import Collect from "./Collect";
import SmallContainer from "./smallContainer";

export default function Summary() {
  function handleclick() {
    console.log(data);
  }

  const [data, setData] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.headText}>
          <h2>Summary</h2>
        </div>
        <div>
          {data.map((point) => (
            <SmallContainer key={point.category} point={point} />
          ))}
        </div>
        <div>
          <Collect data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}
