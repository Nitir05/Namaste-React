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
    const data = await fetch("https://api.github.com/users/Nitir05");
    const json = await data.json();
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    this.setState({
      userInfo: json,
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unmounted");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="text-center">
        <img className="self-center" src={avatar_url} alt="avatar photo" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
