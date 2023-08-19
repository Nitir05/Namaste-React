const Contact = () => {
  return (
    <div className="grid place-items-center">
      <div className="w-6/12 text-center m-4 border shadow-lg rounded-md">
        <h1 className="font-bold">Contact Us</h1>
        <form className="grid col-auto">
          <input
            className="border border-black m-2 p-2 rounded-md"
            type="text"
            name="Name"
            id="name"
            placeholder="Name"
          />
          <input
            className="border border-black m-2 p-2 rounded-md"
            type="number"
            name="Phone"
            id="phone"
            placeholder="phone"
          />
          <input
            className="border border-black m-2 p-2 rounded-md"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <button className="border border-black m-2 p-2 rounded-md bg-gray-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
