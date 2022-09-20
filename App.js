import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, Alert, ImageBackground, Keyboard } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedLoader from 'react-native-animated-loader';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
    
  );
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 });
