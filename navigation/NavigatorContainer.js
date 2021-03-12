import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import UserDetails from "../screens/UserDetails";
import UserOverview from "../screens/UserOverview";

const NavigationContainer = createStackNavigator(
  {
    UserOverview: UserOverview,
    UserDetails: UserDetails,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerTintColor: "white",
    },
  }
);

export default createAppContainer(NavigationContainer);
