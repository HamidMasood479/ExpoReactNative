import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Keyboard } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import tekken from "../assets/tekken.png";
import pexelsj from "../assets/pexelsjacob.jpg";
export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={pexelsj}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    height: "1600",
    width: "720",
  },
});
