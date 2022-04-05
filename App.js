import React from "react";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import NavigationStack from "./NavigationStack";

export default App = ({ navigation }) => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationStack navigation={navigation} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
