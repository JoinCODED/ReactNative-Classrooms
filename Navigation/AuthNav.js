import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import ClassroomList from "../Components/Classroom/List";
import Logout from "../Components/Authentication/Logout";
import ClassroomDetail from "../Components/Classroom/Detail";
import Welcome from "../Components/Welcome";
import StudentsPicker from "../Components/Student/StudentsPicker";

const AuthNav = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    List: ClassroomList,
    ClassroomDetail: ClassroomDetail,
    Welcome: Welcome,
    StudentPicker: {
      screen: StudentsPicker,
      mode: "modal"
    }
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      headerRight: <Logout />,
      headerStyle: {
        backgroundColor: "#5E2032"
      },
      headerTintColor: "#F6EDF0"
    }
  }
);

export default AuthNav;
