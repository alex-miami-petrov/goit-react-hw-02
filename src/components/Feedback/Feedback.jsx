// import React from "react";

// const Feedback = ({ feedback }) => {
//   return (
//     <div>
//       <h2>Feedback statistics</h2>
//       <p>Good: {feedback.good}</p>
//       <p>Neutral: {feedback.neutral}</p>
//       <p>Bad: {feedback.bad}</p>
//     </div>
//   );
// };

// export default Feedback;

import React from "react";

const Feedback = ({ feedback, positiveFeedbackPercentage }) => {
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h2>Feedback Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback collected: {totalFeedback}</p>
      <p>
        Percentage of positive feedback:{" "}
        {isNaN(positiveFeedbackPercentage)
          ? "0%"
          : `${positiveFeedbackPercentage}%`}
      </p>
    </div>
  );
};

export default Feedback;
