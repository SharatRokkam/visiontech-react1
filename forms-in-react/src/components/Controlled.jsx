import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const formData = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    //to prevent the form to submit automatically
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={formData}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>

      {/* condition  */}
      {submittedName && <h3> Submitted Name : {submittedName}</h3>}
    </>
  );
};

export default Controlled;
