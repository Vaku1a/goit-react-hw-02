// import { Component } from "react";

// let counter = 0;

export default function Options({ reviews: { good, neutral, bad }, positive }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {positive}%</p>
    </>
  );
}
