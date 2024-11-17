import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

const UserComponent = (props) => {
  const userList = useSelector((state) => state.userList);
  const isShowing = useSelector((state) => state.isShowing);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState({ name: "", salary: "" });
  let isEmptyObj = Object.keys(editUser).length === 0;

  const handleSave = (updatedUser) => {
    const newUserList = userList.map((user) =>
      user.id === updatedUser.id ? { ...user, ...editUser } : user
    );
    dispatch({ type: "CHANGE_USER_LIST", payload: newUserList });
    setEditUser({});
    toast.success(`Update user ${updatedUser.name} successfully!`);
  };

  const handleDelete = (deletedUser) => {
    const updatedUserList = userList.filter((user) => user.id !== deletedUser.id);
    dispatch({ type: "CHANGE_USER_LIST", payload: updatedUserList });
    toast.success(`Delele user ${deletedUser.name} successfully!`);
  };

  const handleEditUser = (e, type) => {
    const editUserTemp = _.cloneDeep(editUser);
    editUserTemp[type] = e.target.value;
    setEditUser(editUserTemp);
  };

  const handleChangeShowUserList = () => {
    dispatch({ type: "UPDATE_SHOWING_LIST", payload: !isShowing });
  };

  return (
    <Fragment>
      <div className="show_content">
        <div>
          <button onClick={handleChangeShowUserList}>
            {isShowing ? "Hide" : "Show"}
          </button>
        </div>
        {isShowing &&
          userList?.map((item) => {
            const isEditUser = !isEmptyObj && item.id === editUser.id;
            return (
              <div key={item.id} className="show_item">
                <span>
                  {item.id}.{" "}
                  {isEditUser ? (
                    <>
                      <input
                        value={editUser.name}
                        onChange={(e) => handleEditUser(e, "name")}
                      />
                      <input
                        value={editUser.salary}
                        onChange={(e) => handleEditUser(e, "salary")}
                      />
                    </>
                  ) : (
                    <>
                      {item.name} - {item.salary}$
                    </>
                  )}
                </span>
                <div>
                  {isEditUser ? (
                    <button onClick={() => handleSave(item)}>Save</button>
                  ) : (
                    <button onClick={() => setEditUser(item)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default UserComponent;
