import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
import styles from "./smallcontainer.module.css";

const Icons = {
  reaction: reaction,
  memory: memory,
  verbal: verbal,
  visual: visual,
};

const Color = {
  reaction: { text: "hsl(0, 100%, 67%)", bg: "rgba(255, 87, 87, 0.1)" },
  memory: { text: " hsl(39, 100%, 56%)", bg: "rgba(255, 176, 31, 0.1)" },
  verbal: { text: "hsl(166, 100%, 37%)", bg: "rgba(0, 189, 149, 0.1)" },
  visual: { text: "hsl(234, 85%, 45%)", bg: "rgba(37, 17, 212, 0.1)" },
};

export default function SmallContainer({ point }) {
  const ImgSrc = Icons[point.icon];

  const theme = Color[point.icon] || {
    text: "red",
    bg: rgba(37, 17, 212, 0.1),
  };
  return (
    <div className={styles.tank}>
      <div
        className={styles.firstContainer}
        style={{ backgroundColor: theme.bg, color: theme.text }}
      >
        <div className={styles.nextDiv}>
          <img src={ImgSrc} alt="" />
          <p>{point.category}</p>
        </div>
        <p className={styles.total}>
          <span className={styles.score}>
            <strong>{point.score} </strong>
          </span>
          / 100
        </p>
      </div>
    </div>
  );
}
