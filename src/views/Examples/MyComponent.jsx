import React, { Fragment, useState } from "react";
import JobComponent from "./JobComponent";
import AddComponent from "./AddComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyComponent = () => {
  const [name, setName] = useState("");
  const [jobList, setJobList] = useState([]);
  const [contentEdit, setContentEdit] = useState({});
  const isEmptyObj = Object.keys(contentEdit).length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      toast.error("Please enter name");
      return;
    }
    setJobList([...jobList, { id: ++jobList.length, title: name }]);
    setName("");
    toast.success("Successfully to add");
  };

  const handleEdit = (item) => {
    if (!isEmptyObj && contentEdit.id === item.id) {
      let jobListClone = jobList;
      const idx = jobList.findIndex((job) => job.id === item.id);
      jobListClone[idx].title = item.title;
      setContentEdit(jobListClone);
    } else {
      setContentEdit(item);
    }
  };

  const handleDelete = (id) => {
    setJobList(jobList.filter((job) => job.id !== id));
    setContentEdit({});
  };

  return (
    <Fragment>
      <AddComponent name={name} setName={setName} handleSubmit={handleSubmit} />
      <JobComponent
        name={name}
        jobList={jobList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        contentEdit={contentEdit}
        setContentEdit={setContentEdit}
        isEmptyObj={isEmptyObj}
      />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Fragment>
  );
};

export default MyComponent;
