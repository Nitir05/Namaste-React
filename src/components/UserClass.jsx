import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 24,
      avatarUrl: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nitir05");
    const json = await data.json();
    console.log(json);
    this.setState({
      name: json?.name,
      avatarUrl: json?.avatar_url,
    });
  }

  render() {
    const { name, age, avatarUrl } = this.state;
    return (
      <div className="user-card">
        <img src={avatarUrl} alt="Avatar Image" />
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h3>Location: Nagpur</h3>
        <h4>Contact: @nrahangdale86</h4>
      </div>
    );
  }
}

export default UserClass;
