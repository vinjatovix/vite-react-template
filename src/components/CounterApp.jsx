import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [countValue, setCountValue] = useState(value);
  const handleAdd = () => {
    setCountValue(countValue + 1);
  };
  const handleSubtract = () => {
    setCountValue(countValue - 1);
  };
  const handleReset = () => {
    setCountValue(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2 data-testid="count-value">{countValue}</h2>
      <button aria-label="subtract" onClick={handleSubtract}>
        -1
      </button>
      <button aria-label="reset" onClick={handleReset}>
        Reset
      </button>
      <button aria-label="add" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};
