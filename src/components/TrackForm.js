import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
import Spacer from "./Spacer";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Input
        value={name}
        placeholder="Enter Track Name"
        onChangeText={changeName}
      />
      <Spacer />
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button onPress={startRecording} title="Start Recording" />
      )}
      <Spacer />
      {!recording && locations.length ? (
        <Button onPress={() => saveTrack()} title="save Recording" />
      ) : null}
    </>
  );
};

export default TrackForm;
