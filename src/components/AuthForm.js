import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                label='Email'
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)}
            />
            <Spacer />
            <Input
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
                label='Password'
                value={password}
                onChangeText={setPassword}
            />

            <Spacer>
                {errorMessage ? (
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                ) : null}
                <Button
                    title={submitButtonText}
                    onPress={() => onSubmit({ email, password })}
                />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: "red",
        marginLeft: 15,
        marginVertical: 15,
    },
});

export default AuthForm;
