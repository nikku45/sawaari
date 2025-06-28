import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const EmailVerificationScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const handlePrevious = () =>{
    navigation.navigate('page3');
  }
  const handleNext = () =>{
    navigation.navigate('page5');
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.subtitle}>Please verify your email address (optional)</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton} onPress={handlePrevious}>
            <Text style={styles.secondaryButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.secondaryButtonText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={handleNext}>
            <Text style={styles.primaryButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2fc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#f1f2fc',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    color: '#333',
  },
  label: {
    fontSize: 13,
    marginBottom: 6,
    color: '#000',
  },
  input: {
    height: 45,
    borderColor: '#7f8bff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#7f8bff',
    backgroundColor: '#e0e4ff',
    alignItems: 'center',
  },
  skipButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#7f8bff',
    backgroundColor: '#e0e4ff',
    alignItems: 'center',
  },
  primaryButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    backgroundColor: '#7f8bff',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#000',
  },
  primaryButtonText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default EmailVerificationScreen;
