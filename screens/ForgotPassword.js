import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, illustrations } from "../constants";
import { commonStyles } from '../styles/commonStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateInput } from '../utils/actions/formActions';
import { reducer } from '../utils/reducers/formReducers';

const isTestMode = true;

const initialState = {
  inputValues: {
    email: isTestMode ? 'roday43@gmail.com' : '',
  },
  inputValidities: {
    email: false
  },
  formIsValid: false,
};

const ForgotPassword = ({ navigation }) => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if (error) {
      Alert.alert('An error occurred', error);
    }
  }, [error]);

  return (
    <SafeAreaView style={commonStyles.area}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={{ marginTop: 22 }}>
          <Image
            source={illustrations.illustration6}
            style={styles.illustration}
          />
        </View>

        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subTitle}>Set a name for your profile, here's the password</Text>

        <View style={styles.inputContainer}>
          <Text style={{ color: COLORS.black3 }}>Email ID</Text>
          <Input
            id="email"
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['email']}
            placeholder="Roday43@gmail.com"
          />
        </View>

        <Button
          title="SEND CODE"
          onPress={() => navigation.navigate("Verification")}
          filled
          color={COLORS.primary}
          borderColor={COLORS.primary}
          style={styles.buttonContainer}
        />

        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={styles.signUpLink}>{" "}Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.primary,
    marginVertical: 22,
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.black2,
    fontFamily: "regular",
    textAlign: 'center',
    marginHorizontal: 33,
  },
  illustration: {
    height: 126,
    width: 126,
    marginVertical: 12,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    width: SIZES.width - 44,
    marginTop: 32,
  },
  signUpTextContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  signUpText: {
    fontSize: 14,
    color: COLORS.black,
  },
  signUpLink: {
    fontSize: 14,
    color: COLORS.primary,
  },
});

export default ForgotPassword;