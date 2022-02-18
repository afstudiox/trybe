import React from "react";

class UserProfile extends React.Component{
  render() {
    const { id, name, email, avatar } = this.props.user
    return (
      <div className="card">
        <p>{name}</p>
        <p>{email}</p>
        <img src={avatar} alt="Avatar" />
      </div>
    );
  }
}

export default UserProfile;
