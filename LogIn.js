import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername>
        </TouchableOpacity>
      </View>
      <Button title="Login" onPress={() => onLogin(username)} />
      <TouchableOpacity style={styles.registerLink}>
        <Text>Don't have an Account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  logo: { height: 