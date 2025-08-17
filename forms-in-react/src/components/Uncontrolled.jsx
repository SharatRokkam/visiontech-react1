//DOM and useRef

import { useRef, useState } from "react";

const Uncontrolled = () => {
  const inputRef = useRef();
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputRef.current.value); //get the value from DOM
    console.log(inputRef.current.value);
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your name" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>

      {/* Display the Data  */}
      {submittedName && <h3> Submitted Name : {submittedName}</h3>}
    </>
  );
};

export default Uncontrolled;
