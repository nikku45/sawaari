import { View, Text, Pressable, TextInput, StyleSheet } from "react-native-web";

const Signup = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hi! Rider</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Phone number"
                    keyboardType="phone-pad"
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Verify</Text>
                </Pressable>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Otp"
                    keyboardType="number-pad"
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f4f7",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 30,
        color: "#333",
    },
    formContainer: {
        width: "100%",
        maxWidth: 400,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },
    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default Signup;
