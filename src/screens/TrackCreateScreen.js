import React, { useContext, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import TrackForm from "../components/TrackForm";

import { useFocusEffect } from "@react-navigation/native";

const TrackCreateScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(isFocused || state.recording, callback);
  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => setIsFocused(false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h2>Track Create Screen</Text>
        <Spacer />
        <Map />
        <Spacer />
        {err ? <Text>Please enable location services</Text> : null}
        <Spacer />
        <TrackForm />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default TrackCreateScreen;
