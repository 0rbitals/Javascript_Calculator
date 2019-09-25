import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Calculator = (props) => {
  const {
    currentValue,
    addNumber,
    calculate,
    addOperator,
  } = props;
  return (
    <div className="container">
      <div className="calculator">
        <div id="display">
          {currentValue}
        </div>
        <button type="button" id="zero" onClick={addNumber} value="0">0</button>
        <button type="button" id="one" onClick={addNumber} value="1">1</button>
        <button type="button" id="two" onClick={addNumber} value="2">2</button>
        <button type="button" id="three" onClick={addNumber} value="3">3</button>
        <button type="button" id="four" onClick={addNumber} value="4">4</button>
        <button type="button" id="five" onClick={addNumber} value="5">5</button>
        <button type="button" id="six" onClick={addNumber} value="6">6</button>
        <button type="button" id="seven" onClick={addNumber} value="7">7</button>
        <button type="button" id="eight" onClick={addNumber} value="8">8</button>
        <button type="button" id="nine" onClick={addNumber} value="9">9</button>
        <button type="button" id="addition" onClick={addOperator} value="+">+</button>
        <button type="button" id="subtraction" onClick={addOperator} value="-">-</button>
        <button type="button" id="multiplication" onClick={addOperator} value="*">*</button>
        <button type="button" id="division" onClick={addOperator} value="/">/</button>
        <button type="button" id="equals" onClick={calculate} value="=">=</button>
      </div>
    </div>
  );
};

Calculator.propTypes = {
  currentValue: PropTypes.string.isRequired,
  addNumber: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
  addOperator: PropTypes.func.isRequired,
};

export default Calculator;
