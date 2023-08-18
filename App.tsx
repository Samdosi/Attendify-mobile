import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Color } from "./styles/GlobalStyles";
import Login from "./pages/Login";
import { useFonts } from "expo-font";
import AnimatedBackground from "./AnimatedBackground.js";
export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
