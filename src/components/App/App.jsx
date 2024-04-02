import { Component } from "react";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "./Notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = ({ target: { name } }) => {
    // console.log("e", e.target.name);
    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  resetFeedback = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalReviews = good + neutral + bad;
    const positive = Math.round((good / totalReviews) * 100);

    return (
      <>
        <h1>Sip Happens Café. </h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
        <Options
          updateFeedback={this.updateFeedback}
          totalReviews={totalReviews}
          resetFeedback={this.resetFeedback}
        ></Options>
        {totalReviews === 0 && <Notification />}
        {totalReviews >= 1 && (
          <Feedback reviews={this.state} positive={positive} />
        )}
      </>
    );
  }
}
