import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createTopTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./pages/Home";
import PostPage from "./pages/PostPage";

// Stack
// const Stack = createStackNavigator();

// Bottom Tabs
// const Stack = createBottomTabNavigator();

// Top Tabs
const Stack = createMaterialTopTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="PostPage" component={PostPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
