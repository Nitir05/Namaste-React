import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="text-center">
      <h1>About Us</h1>
      <UserClass name={"Nitin"} location={"Nagpur"} age={24} />
    </div>
  );
};

export default About;
