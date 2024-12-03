import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Chatbot = () => {
  const [apiKey, setApiKey] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef();

  const sendMessage = async () => {
    if (!apiKey) {
      Alert.alert('Error', 'API key is required');
      return;
    }

    setLoading(true);
    // Simulate sending message to the chat API
    setTimeout(() => {
      setMessages([...messages, { text: input, isFromUser: true }]);
      setLoading(false);
      setInput('');
      scrollViewRef.current.scrollToEnd({ animated: true });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Tutor AI</Text>
      <ScrollView style={styles.chatContainer} ref={scrollViewRef}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.isFromUser ? styles.userMessage : styles.botMessage}>
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage} disabled={loading} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  chatContainer: { flex: 1, marginBottom: 16 },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
  sendButton: { marginLeft: 8, padding: 8, backgroundColor: '#007BFF', borderRadius: 4 },
  sendButtonText: { color: '#fff', fontWeight: 'bold' },
  userMessage: { alignSelf: 'flex-end', backgroundColor: '#DCF8C6', padding: 10, borderRadius: 10, marginVertical: 4 },
  botMessage: { alignSelf: 'flex-start', backgroundColor: '#F1F0F0', padding: 10, borderRadius: 10, marginVertical: 4 },
});

export default Chatbot;