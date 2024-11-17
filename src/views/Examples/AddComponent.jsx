import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const initUser = {
  name: "",
  salary: "",
};

const AddComponent = () => {
  const [user, setUser] = useState(initUser);
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!user.name || !user.salary) {
      toast.error("Please enter name and salary");
      return;
    }
    const userInfo = {
      id: userList.length + 1,
      name: user.name,
      salary: user.salary,
    };
    dispatch({ type: "CHANGE_USER_LIST", payload: [...userList, userInfo] });
    toast.success(`Add user ${user.name} successfully!`);
    setUser(initUser);
  };

  const onChangeInput = (value, type = "name" | "salary") => {
    setUser({ ...user, [type]: value });
  };

  return (
    <form className="form">
      <div className="input_form">
        <label htmlFor="fname">First name:</label>
        <input
          type="text"
          id="fname"
          value={user.name}
          onChange={(e) => onChangeInput(e.target.value, "name")}
        />
      </div>
      <div className="input_form">
        <label htmlFor="lname">Salary:</label>
        <input
          type="text"
          id="lname"
          value={user.salary}
          onChange={(e) => onChangeInput(e.target.value, "salary")}
        />
      </div>
      <br />
      <input type="button" value="Submit" onClick={() => handleSubmit()} />
    </form>
  );
};

export default AddComponent;
