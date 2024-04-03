import css from "./Feedback.module.css";

export default function Options({ reviews, positive }) {
  return (
    <div className={css.container}>
      {reviews.map(([key, value]) => (
        <p className={css.stat} key={key}>
          {key.toUpperCase()}: {value}
        </p>
      ))}

      <p className={css.stat}>POSITIVE: {positive}%</p>
    </div>
  );
}
