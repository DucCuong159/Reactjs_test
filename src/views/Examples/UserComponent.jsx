import React, { useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";

const UserComponent = (props) => {
  const { userList, setUserList } = props;
  const [show, setShow] = useState(true);
  const [editUser, setEditUser] = useState({});

  let isEmptyObj = Object.keys(editUser).length === 0;
  const handleSave = (item) => {
    const updatedUserList = userList.map((user) => {
      if (user.id === item.id) {
        return { ...user, ...editUser };
      }
      return user;
    });
    setUserList(updatedUserList);
    setEditUser({})
    toast.success("Update todo succeed!");
  };

  const handleDelete = (item) => {
    const updatedUserList = userList.filter((user) => user.id !== item.id);
    setUserList(updatedUserList);
    toast.success("Delele succeed!");
  };

  const handleEditUser = (e, type) => {
    const editUserTemp = _.cloneDeep(editUser);
    editUserTemp[type] = e.target.value;
    setEditUser(editUserTemp);
  };

  return (
    <>
      <div>
        <div>
          <button onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </button>
        </div>
        {show &&
          userList.map((item) => (
            <div key={item.id} className="show_item">
              {!isEmptyObj && item.id === editUser.id ? (
                <>
                  <input
                    value={editUser.name}
                    onChange={(e) => handleEditUser(e, "name")}
                  />
                  <input
                    value={editUser.salary}
                    onChange={(e) => handleEditUser(e, "salary")}
                  />
                  <button onClick={() => handleSave(item)}>Save</button>
                </>
              ) : (
                <>
                  <span>
                    {item.name} - {item.salary}$
                  </span>
                  <button onClick={() => setEditUser(item)}>Edit</button>
                </>
              )}

              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default UserComponent;
