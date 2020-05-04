import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileView from "./ProfileView";
import { getUserInfo } from "./ProfileActions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Profile = () => {
  const profile = useSelector((state) => state.ProfileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div>
      <PrivateRoute>
        {profile.userInfo.map(({ ...rest }) => (
          <ProfileView {...rest} />
        ))}
      </PrivateRoute>
    </div>
  );
};

export default Profile;
