import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={styles.outerContainer}>
      <Spacer>
        <Text h2>Account Screen</Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.Button} title="Logout" onPress={signout} />
        </View>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    height: `${100 - 3}%`,
    marginTop: 30,
  },
  buttonContainer: {
    height: `${100 - 6}%`,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default AccountScreen;
