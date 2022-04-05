import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import AuthLink from "../components/AuthLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Tracker"
        onSubmit={signin}
        buttonText="Sign in"
        errorMessage={state.errorMessage}
      />
      <AuthLink
        navigation={navigation}
        routeName="Signup"
        linkText="Don't have an account? Sign up here."
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

export default SigninScreen;
