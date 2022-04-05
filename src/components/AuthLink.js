import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AuthLink = ({ navigation, linkText, routeName }) => {
  const { clearErrorMessage } = useContext(AuthContext);
  return (
    <>
      <Spacer>
        <TouchableOpacity
          onPress={() => {
            clearErrorMessage();
            navigation.navigate(routeName);
          }}
        >
          <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default AuthLink;
