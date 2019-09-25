import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: '0',
    };
    this.addNumber = this.addNumber.bind(this);
    this.calculate = this.calculate.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.clear = this.clear.bind(this);
  }

  addNumber(event) {
    const { value } = event.target;
    const { currentValue } = this.state;
    if (currentValue === '0') {
      this.setState({
        currentValue: value,
        currentOperator: '',
      });
    } else {
      this.setState((prevState) => ({
        currentValue: prevState.currentValue.concat(value),
      }));
    }
  }

  clear() {
    this.setState({
      currentValue: '0',
    });
  }

  addOperator(event) {
    const { value } = event.target;
    this.setState((prevState) => ({
      currentOperator: value,
      currentValue: prevState.currentValue.concat(value),
    }));
  }

  calculate() {
    const { currentValue, currentOperator } = this.state;
    const operation = {
      '+': currentValue.split(currentOperator).reduce((acc, next) => Number(acc) + Number(next)),
      '-': currentValue.split(currentOperator).reduce((acc, next) => Number(acc) - Number(next)),
      '/': currentValue.split(currentOperator).reduce((acc, next) => Number(acc) / Number(next)),
      '*': currentValue.split(currentOperator).reduce((acc, next) => Number(acc) * Number(next)),
    };
    this.setState({
      currentValue: operation[currentOperator].toString(),
    });
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div>
        <Calculator
          currentValue={currentValue}
          addOperator={this.addOperator}
          clear={this.clear}
          addNumber={this.addNumber}
          calculate={this.calculate}
        />
      </div>
    );
  }
}

export default App;
