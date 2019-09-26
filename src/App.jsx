import React, { Component } from 'react';
import Calculator from './Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: '0',
      currentOperator: '',
    };
    this.addNumber = this.addNumber.bind(this);
    this.calculate = this.calculate.bind(this);
    this.addOperator = this.addOperator.bind(this);
    this.clear = this.clear.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  addNumber(event) {
    const { value } = event.target;
    const { currentValue } = this.state;
    if (currentValue === '0') {
      this.setState({
        currentValue: value,
      });
    } else if (currentValue.includes('.') && value === '.') {
      throw new Error('Invalid input');
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
    const { currentValue } = this.state;
    const newValue = currentValue.split(' ');
    // loop through the array, evaluate the multiplications and divisions first
    // and only leave the total (delete the operation when done (e.g x * y) )
    // keep doing that then go on to the addition and subtraction ops
    // until one value is left
    while (newValue.length > 1) {
      newValue.forEach((val, index, arr) => {
        if (val === '*') {
          const temp = Number(arr[index - 1]) * Number(arr[index + 1]);
          arr[index - 1] = temp;
          newValue.splice(index, 2);
        } else if (val === '/') {
          const temp = Number(arr[index - 1]) / Number(arr[index + 1]);
          arr[index - 1] = temp;
          newValue.splice(index, 2);
        }
      });
      if (!newValue.includes('*') && !newValue.includes('/')) {
        newValue.forEach((val, index, arr) => {
          if (val === '+') {
            const temp = Number(arr[index - 1]) + Number(arr[index + 1]);
            arr[index - 1] = temp;
            newValue.splice(index, 2);
          } else if (val === '-') {
            const temp = Number(arr[index - 1]) - Number(arr[index + 1]);
            arr[index - 1] = temp;
            newValue.splice(index, 2);
          }
        });
      }
    }
    // call the function that will change the display with the new value
    this.updateValue(newValue.toString());
  }

  updateValue(val) {
    this.setState({
      currentValue: val,
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
