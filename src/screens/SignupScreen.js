import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm
                headerText='Sign Up for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign Up'
                onSubmit={signup}
            />

            <NavLink
                routeName='Signin'
                text='Already have an accout? Sign in instead'
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
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

export default SignUpScreen;
