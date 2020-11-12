import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/authContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText='Login'
                errorMessage={state.errorMessage}
                submitButtonText='Login'
                onSubmit={signin}
            />

            <NavLink
                routeName='Signup'
                text='Dont have an account? Sign up instead'
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    },
});

export default SigninScreen;
