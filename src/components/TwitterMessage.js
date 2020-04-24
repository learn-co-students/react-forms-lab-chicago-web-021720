import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charCount = this.props.maxChars - this.state.message.length
    return (
        <div>
          <strong>Your message:</strong>
          <input type="text"
            onChange={this.handleChange}
            value={this.state.message}
          />
          <p>Characters remaining: {charCount} </p>
        </div>
    );
  }
}
