import React from 'react';

const FeedbackOptions = ({ click }) => {
  return (
    <>
      <button name="good" onClick={click}>
        Good
      </button>
      <button name="neutral" onClick={click}>
        Neutral
      </button>
      <button name="bad" onClick={click}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
