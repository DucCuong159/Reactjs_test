import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/index";
import AddComponent from "./AddComponent";
import UserComponent from "./UserComponent";

const JobComponent: React.FC = () => {
  const userList = useSelector((state: RootState) => state.user.userList);

  return (
    <div style={{ paddingTop: "20px" }}>
      <AddComponent />
      <UserComponent userList={userList} />
    </div>
  );
};

export default JobComponent;
