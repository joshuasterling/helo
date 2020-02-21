import React from "react";
import axios from "axios";

class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRegister = () => {
    const { username, password } = this.state;
    axios
      .post("/api/register", {
        username: username,
        password: password
      })
      .then(res => {
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <p>Auth Component</p>
        <h1>Helo</h1>
        <input
          maxLength="100"
          placeholder="Enter Username"
          name="username"
          onChange={this.handleInput}
        />
        <br />
        <input
          maxLength="100"
          placeholder="Enter Password"
          name="password"
          onChange={this.handleInput}
        />
        <br />
        <button>Login</button>
        <button
          onclick={this.handleRegister}
          className="input-container-button"
        >
          Register
        </button>
      </div>
    );
  }
}

export default Auth;
