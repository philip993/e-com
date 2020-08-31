import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Components
import ProfileView from "./ProfileView";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Redux Actions
import { getUserInfo } from "./ProfileActions";

const Profile = () => {
  const profile = useSelector((state) => state.ProfileReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <div className={classes.contentContainer}>
      <PrivateRoute>
        {profile.userInfo.map(({ ...rest }) => (
          <ProfileView {...rest} />
        ))}
      </PrivateRoute>
    </div>
  );
};

export default Profile;
