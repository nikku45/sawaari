import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
 
export default function confirmPage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
 
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Thanks For Signing Up</Text>
        <Text style={styles.subtitle}>Registration Completed Successfully</Text>
        <View style={styles.iconContainer}>
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✔</Text>
          </View>
        </View>
 
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find your first customer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E9',
  },
  header: {
    height: 80,
    backgroundColor: '#FF7A00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 150,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
    textAlign: 'center',
  },
  iconContainer: {
    marginVertical: 20,
  },
  checkmark: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#00C853',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0000FF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
   