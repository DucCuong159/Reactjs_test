import React from "react";

const AddComponent = (props) => {
  const { name, salary, setName, setSalary, handleSubmit } = props;

  return (
    <form className="form">
      <div className="input_form">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="input_form">
        <label htmlFor="lname">Salary:</label>
        <input type="text" id="lname" value={salary} onChange={(e) => setSalary(e.target.value)} />
      </div>
      <br />
      <input type="button" value="Submit" onClick={(event) => handleSubmit(event)} />
    </form>
  );
};

export default AddComponent;
