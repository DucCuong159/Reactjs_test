import React from "react";

const AddComponent = (props) => {
  const { name, setName, handleSubmit } = props;

  return (
    <form className="form">
      <div className="input_form">
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <input
        type="button"
        value="Submit"
        onClick={(event) => handleSubmit(event)}
      />
    </form>
  );
};

export default AddComponent;
