import { useState, useEffect } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

export default function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("feedback"));
    return savedData || initialState;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = ({ target: { name } }) => {
    setFeedback((prevState) => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  const { good, neutral, bad } = feedback;
  const totalReviews = good + neutral + bad;
  const positive =
    totalReviews === 0 ? 0 : Math.round((good / totalReviews) * 100);

  return (
    <>
      <h1 className={css.title}>Sip Happens Café. </h1>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        totalReviews={totalReviews}
        resetFeedback={resetFeedback}
        keys={Object.keys(feedback)}
      />
      {totalReviews === 0 && <Notification />}
      {totalReviews >= 1 && (
        <Feedback reviews={Object.entries(feedback)} positive={positive} />
      )}
    </>
  );
}
