import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const DetailUser = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  let isEmptyObj = Object.keys(user).length === 0;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const FetchDetailUser = async (id) => {
    setIsLoading(true);
    await axios.get(`https://reqres.in/api/users/${id}`).then((response) => {
      if (response?.status === 200 && response?.data?.data) {
        setUser(response.data.data);
        isEmptyObj = Object.keys(response.data.data).length === 0;
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    FetchDetailUser(params?.id);
  }, []);

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <div>hello world from detail user with id: {params.id}</div>
      {isEmptyObj === false && !isLoading && (
        <>
          <div>
            User's name: {user.first_name} - {user.last_name}
          </div>
          <div>User's email: {user.email}</div>
          <div>
            <img src={user.avatar} alt="avt" />
          </div>
          <div>
            <button type="button" onClick={() => handleBackButton()}>
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DetailUser;
