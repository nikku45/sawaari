import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
 
const SignupPage2 = ({ navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
 
    const handleNext = () => {
        console.log('Next clicked:', firstName, lastName);
        navigation.navigate('page3'); // optional next step
    };
 
    const handlePrevious = () => {
        navigation.goBack();
    };
 
    const handleReset = () => {
        setFirstName('');
        setLastName('');
    };
 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#6a5acd" barStyle="light-content" />
            <View style={styles.header} />
 
            <View style={styles.mainContent}>
                <Text style={styles.title}>Fill your Name</Text>
                <Text style={styles.subtitle}>Please enter your name</Text>
 
                <Text style={styles.label}>First Name</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.icon}>👤</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter first name"
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                </View>
 
                <Text style={styles.label}>Last Name</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.icon}>👤</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter last name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>
 
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.prevButton} onPress={handlePrevious}>
                        <Text style={styles.prevText}>Previous</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                        <Text style={styles.resetText}>Reset</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
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
        marginBottom: 24,
        height: 48,
    },
    icon: {
        fontSize: 18,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    prevButton: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 6,
        paddingVertical: 12,
        marginRight: 8,
    },
    prevText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
    },
    resetButton: {
        width: 80,
        backgroundColor: '#e1e4ff',
        borderRadius: 6,
        paddingVertical: 12,
        marginRight: 8,
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
 
export default SignupPage2;