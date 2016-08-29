import React from 'react';
import { Component } from 'react';
import './css/counter.css';

export default class Counter extends Component {

  constructor(props) {
    super();
    this.state = {
      counter: 0,
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrementCounter() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <button className="counterButton" onClick={this.decrementCounter}>-</button>
        <span className="counterNumber">{this.state.counter}</span>
        <button className="counterButton" onClick={this.incrementCounter}>+</button>
      </div>
    );
  }
}
