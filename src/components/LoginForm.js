import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }

    this.usernameChange = this.usernameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  passwordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.usernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.passwordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm
