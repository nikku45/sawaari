import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AdditionalDetailsScreen = ({navigation}) => {
  const [gender, setGender] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState('');

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const date = selectedDate;
      const formatted = `${String(date.getDate()).padStart(2, '0')}/${String(
        date.getMonth() + 1
      ).padStart(2, '0')}/${date.getFullYear()}`;
      setBirthDate(formatted);
    }
  };

  const resetFields = () => {
    setGender('');
    setBirthDate('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Additional Details</Text>
        <Text style={styles.subtitle}>Please provide the following details</Text>

        <Text style={styles.label}>Gender</Text>
        {Platform.OS === 'web' ? (
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={styles.webSelect}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        ) : (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        )}

        <Text style={styles.label}>Birth Date</Text>
        {Platform.OS === 'web' ? (
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            style={styles.webDateInput}
          />
        ) : (
          <>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                value={birthDate}
                editable={false}
              />
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={new Date()}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.secondaryButton} onPress={()=>navigation.navigate('page3')}>
            <Text style={styles.secondaryButtonText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipButton} onPress={resetFields}>
            <Text style={styles.secondaryButtonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton} onPress={()=>navigation.navigate('page5')}>
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
    padding: 20,
    backgroundColor: '#f1f2fc',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
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
    justifyContent: 'center',
  },
  webSelect: {
    width: '100%',
    height: 45,
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    border: '1px solid #7f8bff',
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  webDateInput: {
    width: '100%',
    height: 45,
    padding: 10,
    fontSize: 14,
    borderRadius: 8,
    border: '1px solid #7f8bff',
    backgroundColor: '#fff',
    marginBottom: 25,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#7f8bff',
    borderRadius: 8,
    marginBottom: 25,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    height: 45,
    width: '100%',
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

export default AdditionalDetailsScreen;
