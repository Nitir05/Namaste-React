import React from "react";
//import {Component} from "react"; this is similar to above one
//extend Component directly

export default class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "test name",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const timer = setInterval(() => {
      console.log("component mount");
    }, 100);
    const data = await fetch("https://api.github.com/users/Nitir05");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("component umounted");
    clearInterval(this.timer);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-container">
        <img className="avatar-img" src={avatar_url} alt="avatar photo" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
