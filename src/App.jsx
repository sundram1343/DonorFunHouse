import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from './Context/AuthContext';
import Home1 from './pages/home/home1';
import LoginSystem from './pages/LoginSystem/LoginSystem';
import Profile from './pages/Profile/profile';
import SignUp from './pages/LoginSystem/Signup';
const Stack = createStackNavigator();
const AppNavigator = () => {
  const { IsLoggedIn } = useAuth(); 

  return (
    <Stack.Navigator>
      {IsLoggedIn ? (
        <>
          <Text>test</Text>
          <Stack.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="LoginSystem" component={LoginSystem} />
          <Stack.Screen name="Signup" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});