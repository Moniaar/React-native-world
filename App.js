import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <View style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      {isLoggedIn ? (
        <MainPage toggleTheme={toggleTheme} isDarkMode={isDarkMode} username={username} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </View>
  );
};

const MainPage = ({ toggleTheme, isDarkMode, username }) => (
  <View>
    <Text style={isDarkMode ? styles.darkText : styles.lightText}>Stay Focused, motivated.</Text>
    <Text style={isDarkMode ? styles.darkText : styles.lightText}>Let's focus for a bit and reward ourselves later!</Text>
    <Button onPress={toggleTheme} title="Toggle Theme" />
  </View>
);

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  
  return (
    <View>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <Button onPress={() => onLogin(username)} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  darkContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#FFFFFF',
  },
  lightText: {
    color: '#000000',
  },
});

export default App;