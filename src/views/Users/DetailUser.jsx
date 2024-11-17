import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [isEmptyObj, setIsEmptyObj] = useState(true);
  const history = useHistory();

  const FetchDetailUser = async (userId) => {
    await axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if (response?.status === 200 && response?.data?.data) {
          setUser(response.data.data);
          setIsEmptyObj(Object.keys(response.data.data).length === 0);
        }
      })
      .catch((e) => {
        console.error("Error fetching user details:", e);
      });
  };

  useEffect(() => {
    if (id) {
      FetchDetailUser(id);
    }
  }, [id]);

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <div>hello world from detail user with id: {id}</div>
      {isEmptyObj === false && (
        <>
          <div>
            User's name: {user.first_name} - {user.last_name}
          </div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} alt="avt" />
          </div>
          <div>
            <button
              type="button"
              onClick={() => handleBackButton()}
              style={{ cursor: "pointer" }}
            >
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DetailUser;
