import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      maxChars: this.props.maxChars

    };
  }

  handleChange = e => {
    this.setState({
      tweet: e.target.value,
    })
    this.setState(prevState => ({
      maxChars: prevState.maxChars - 1
    }))
  }


  render() {
    console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={e => this.handleChange(e)} />
    <p>Remaining Characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
