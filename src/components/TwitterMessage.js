import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  messageLength = () => {
    return this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleOnChange} type="text" name="message" id="message" value={this.state.message} />
        <p>{this.props.maxChars - this.messageLength()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
