import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import BottomTab from "./screens/BottomTab";
import Login from "./screens/auth/Login";
import MobileLogin from "./screens/auth/MobileLogin";
import ProfileScreen from "./screens/profile/ProfileDetails";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="mobile"
        component={MobileLogin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="EditProfile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
