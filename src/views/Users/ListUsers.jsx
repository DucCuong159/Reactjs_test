import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ListUsers.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ListUsers = () => {
  const [listUsers, setListUsers] = useState({});
  useEffect(() => {
    FetchUser();
  }, []);

  const history = useHistory();

  const FetchUser = async () => {
    await axios.get("https://reqres.in/api/users?page=1").then((response) => {
      if (response.status === 200 && response.data && response.data.data) {
        setListUsers(response.data.data);
      }
    });
  };

  const handleClickUser = (id) => {
    history.push(`/users/${id}`);
  };

  return (
    <div className="list-user-container">
      <div className="title">Fetch all list users</div>
      <div className="list-user-content">
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => {
            return (
              <div
                className="child"
                key={item.id}
                onClick={() => handleClickUser(item.id)}
              >
                {index + 1} - {item.first_name} {item.last_name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListUsers;
