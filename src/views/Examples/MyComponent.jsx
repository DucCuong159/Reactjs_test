import React, { Fragment, useState } from "react";
import JobComponent from "./JobComponent";
import AddComponent from "./AddComponent";

const MyComponent = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [jobList, setJobList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !salary) {
      alert("Please enter a name and a salary");
      return;
    }
    setJobList([...jobList, { id: ++jobList.length, title: name, salary: salary }]);
    setName("");
    setSalary("");
  };

  const handleDelete = (id) => {
    setJobList(jobList.filter((job) => job.id !== id));
  }

  return (
    <Fragment>
      <AddComponent
        name={name}
        salary={salary}
        setName={setName}
        setSalary={setSalary}
        handleSubmit={handleSubmit}
      />
      <JobComponent name={name} salary={salary} jobList={jobList} handleDelete={handleDelete}/>
    </Fragment>
  );
};

export default MyComponent;
