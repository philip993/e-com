import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileView from "./ProfileView";
import { getUserInfo } from "./ProfileActions";

const Profile = () => {
  const profile = useSelector((state) => state.ProfileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div>
      {profile.userInfo.map(({ ...rest }) => (
        <ProfileView {...rest} />
      ))}
    </div>
  );
};

export default Profile;
