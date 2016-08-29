import React from 'react';
import { Component } from 'react';

export default class StateExample extends Component {

  constructor(props) {
    super();
    this.state = {
      message: '',
      messageSize: 'large'
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  handleMessageChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSizeChange(event) {
    this.setState({
      messageSize: event.target.value
    });
  }

  renderMessage() {
    if (this.state.messageSize === 'large') {
      return (<h1>{this.state.message}</h1>);
    } else if (this.state.messageSize === 'medium') {
      return (<h3>{this.state.message}</h3>);
    } else {
      return (<h5>{this.state.message}</h5>);
    }
  }

  render() {
    return (
      <div>
        <div>
          Enter a message: <input type="text" onChange={this.handleMessageChange} />
        </div>
        <span>Choose a message size: </span>
        <select onChange={this.handleSizeChange}>
          <option>large</option>
          <option>medium</option>
          <option>small</option>
        </select>
        {this.renderMessage()}
      </div>
    );
  }
}
