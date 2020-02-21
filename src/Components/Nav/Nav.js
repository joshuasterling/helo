import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("hit", this.props);
    return (
      <div className="nav">
        Nav Component
        <div className="profile-pic">
          {/* <img src={this.props.user.profile_pic} /> */}
        </div>
        <Link to="/dashboard">
          <button>Home</button>
        </Link>
        <Link to="/new">
          <button>New Post</button>
        </Link>
        <Link to="/">
          <button>Logout</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState;
  return {
    username: user.username,
    profile_pic: user.profile_pic
  };
};

export default connect(mapStateToProps)(Nav);
