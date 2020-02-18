import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileView from "./ProfileView";
import { GetUserInfo } from "./ProfileActions";

const Profile = () => {
  const profile = useSelector(state => state.ProfileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserInfo());
  }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      {profile.userInfo.map(({ ...rest }) => (
        <ProfileView {...rest} />
      ))}
    </div>
  );
};

export default Profile;
