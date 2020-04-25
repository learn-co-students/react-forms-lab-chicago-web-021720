import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""

    };
  }

  handleUsernameChange = e => {
    this.setState({
      ...this.state,
      username: e.target.value
    })

  }
  handlePasswordChange = e => {
    this.setState({
      ...this.state,
      password: e.target.value
    })

  }

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(this.state)
    }
  }



  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.handleUsernameChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.handlePasswordChange(e)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
