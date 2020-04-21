import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginCallback = event => {
    event.preventDefault()
    console.log(this.state)
    if(!(this.state.username === "" || this.state.password === "")) {
      this.props.handleLogin(this.state)
    }
  }

  // canSubmit = () =>{
  //   !(this.state.username === "" || this.state.password === "")
  // }

  render() {
    return (
      <form onSubmit={this.loginCallback}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} id="password" name="password" type="password" value={this.state.password}/>
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
