import react from "react";

const PersonInfo = ({ data, setdata }) => {
  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setdata({ name: "", email: "", contact: "" });
  };

  return (
    <div>
      <h1>Personal information</h1>
      <form onSubmit={handlesubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name || ''} // Controlled input
          onChange={handlechange}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email || ''} // Controlled input
          onChange={handlechange}
        />
        <br />
        <br />
        <label>Contact Number </label>
        <input
          type="tel"
          name="contact"
          value={data.contact || ''} // Controlled input
          onChange={handlechange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PersonInfo;
