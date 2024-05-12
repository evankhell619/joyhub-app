import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return <div>Profile - {user.username}</div>;
};

export default Profile;
