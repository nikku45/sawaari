import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const SignupPage1 = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    console.log('Send OTP clicked:', mobileNumber);
    // Trigger OTP send logic here
  };

  const handleResendOTP = () => {
    console.log('Resend OTP clicked');
    // Resend OTP logic
  };

  const handleReset = () => {
    setMobileNumber('');
    setOtp('');
  };

  const handleNext = () => {
    console.log('Next clicked:', mobileNumber, otp);
    navigation.navigate('page2'); // ✅ FIXED: navigate spelling
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6a5acd" barStyle="light-content" />

      {/* Header Spacer */}
      <View style={styles.header} />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Enter your mobile number to receive OTP</Text>

        {/* Mobile Number */}
        <Text style={styles.label}>Mobile Number</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.flag}>🇮🇳 +91</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            maxLength={10}
            placeholder="XXXXXXXXXX"
            value={mobileNumber}
            onChangeText={setMobileNumber}
          />
        </View>

        <TouchableOpacity style={styles.sendOtpButton} onPress={handleSendOTP}>
          <Text style={styles.sendOtpText}>Send OTP</Text>
        </TouchableOpacity>

        {/* OTP */}
        <Text style={styles.label}>Enter OTP</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.otpIcon}>🔑</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            maxLength={6}
            placeholder="------"
            value={otp}
            onChangeText={setOtp}
          />
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.nextButton,
              !(mobileNumber && otp) && { opacity: 0.5 },
            ]}
            onPress={handleNext}
            disabled={!(mobileNumber && otp)}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PRIMARY_COLOR = '#6a5acd';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f2ff',
  },
  header: {
    height: 0,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 175,
  },
  mainContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 2,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c4c7ff',
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 48,
  },
  flag: {
    fontSize: 16,
    marginRight: 10,
  },
  otpIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  resend: {
    color: PRIMARY_COLOR,
    fontWeight: '500',
    fontSize: 13,
  },
  sendOtpButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 6,
    paddingVertical: 12,
    marginBottom: 28,
    alignItems: 'center',
  },
  sendOtpText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#e1e4ff',
    borderRadius: 6,
    paddingVertical: 12,
    marginRight: 10,
  },
  resetText: {
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
  },
  nextButton: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 6,
    paddingVertical: 12,
  },
  nextText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});

export default SignupPage1;
