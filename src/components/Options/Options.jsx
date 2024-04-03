import { nanoid } from "nanoid";
import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalReviews,
  keys,
}) {
  return (
    <div className={css.buttonContainer}>
      {keys.map((key) => (
        <button
          className={css.button17}
          name={key}
          key={nanoid()}
          onClick={updateFeedback}
        >
          {key.toUpperCase()}
        </button>
      ))}
      {totalReviews != 0 && (
        <button className={css.button17} onClick={resetFeedback}>
          RESET
        </button>
      )}
    </div>
  );
}
