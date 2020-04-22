import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      charsLeft: this.props.maxChars,
      inputValue: ''
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    // Update the state with the change
    this.setState({
      inputValue: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} onChange={this.onChange}/>
        <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
