export default function Options({
  updateFeedback,
  resetFeedback,
  totalReviews,
}) {
  return (
    <>
      <button name="good" onClick={updateFeedback}>
        Good
      </button>
      <button name="neutral" onClick={updateFeedback}>
        Neutral
      </button>
      <button name="bad" onClick={updateFeedback}>
        Bad
      </button>
      {totalReviews != 0 && <button onClick={resetFeedback}>Reset</button>}
    </>
  );
}
