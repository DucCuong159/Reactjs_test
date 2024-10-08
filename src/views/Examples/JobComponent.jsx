import React, { useState } from "react";

const JobComponent = (props) => {
  const {
    jobList,
    handleEdit,
    handleDelete,
    contentEdit,
    setContentEdit,
    isEmptyObj,
  } = props;
  const [show, setShow] = useState(true);

  const handleEditData = (value) => {
    setContentEdit({ ...contentEdit, title: value });
  };

  return (
    <div className="show_content">
      {show &&
        jobList.map((item, index) => (
          <div key={item.id} className="show_item">
            {!isEmptyObj && item.id === contentEdit.id ? (
              <span className="algin-item">
                {item.id}:{" "}
                <input
                  value={contentEdit.title}
                  onChange={(event) => handleEditData(event.target.value)}
                />
              </span>
            ) : (
              <>
                {item.id}: {item.title}
              </>
            )}
            <span className="algin-item">
              <button onClick={() => handleEdit(item)}>
                {!isEmptyObj && item.id === contentEdit.id ? "Save" : "Edit"}
              </button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </span>
          </div>
        ))}
      <div>
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
};

export default JobComponent;
