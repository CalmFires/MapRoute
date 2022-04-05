import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import AuthLink from "../components/AuthLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        onSubmit={signup}
        buttonText="Sign up"
        errorMessage={state.errorMessage}
      />
      <AuthLink
        navigation={navigation}
        routeName="Signin"
        linkText="Already have an account? Sign in here."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
    flex: 1,
    justifyContent: "center",
  },
});

export default SignupScreen;
