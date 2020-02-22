import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../ducks/reducer";
import axios from "axios";

class Auth extends React.Component {
  constructor(props) {
    super(props);

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

  handleLogin = () => {
    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.getUser(res.data);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
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
        <button onClick={this.handleLogin} className="input-container-button">
          Login
        </button>
        <button
          onClick={this.handleRegister}
          className="input-container-button"
        >
          Register
        </button>
      </div>
    );
  }
}

export default connect(null, { getUser })(Auth);
