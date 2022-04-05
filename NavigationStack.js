import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Context as AuthContext } from "./src/context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const MainStack = createBottomTabNavigator();
const TrackListStack = createNativeStackNavigator();

const TrackStack = () => {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="Track List" component={TrackListScreen} />
      <TrackListStack.Screen
        name="Track Detail"
        component={TrackDetailScreen}
      />
    </TrackListStack.Navigator>
  );
};

const NavigationStack = () => {
  const {
    state: { token },
    tryLocalSignin,
  } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <>
      {token ? (
        <NavigationContainer>
          <MainStack.Navigator
            screenOptions={{ headerShown: false, showIcon: true }}
          >
            <MainStack.Screen
              name="Tracks"
              component={TrackStack}
              options={{
                tabBarIcon: () => <FontAwesome name="th-list" size={20} />,
              }}
            />
            <MainStack.Screen
              name="New Track"
              component={TrackCreateScreen}
              options={{
                tabBarIcon: () => <FontAwesome name="plus" size={20} />,
              }}
            />
            <MainStack.Screen
              name="Account"
              component={AccountScreen}
              options={{
                tabBarIcon: () => <FontAwesome name="gear" size={20} />,
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Signup" component={SignupScreen} />
            <AuthStack.Screen name="Signin" component={SigninScreen} />
          </AuthStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default NavigationStack;
