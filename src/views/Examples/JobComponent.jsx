import React, { useState } from "react";

const JobComponent = (props) => {
  const { jobList, handleDelete } = props;
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <div>
          <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </div>
        {show &&
          jobList.map((item, index) => (
            <div key={item.id} className="show_item">
              {item.title} - {item.salary}$<button onClick={() => handleDelete(item.id)}>X</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default JobComponent;
