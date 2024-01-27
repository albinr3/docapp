import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, illustrations } from "../constants";
import { commonStyles } from '../styles/commonStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducers'

const isTestMode = true

const initialState = {
  inputValues: {
    currentPassword: isTestMode ? '**********' : '',
    password: isTestMode ? '**********' : '',
    confirmPassword: isTestMode ? '**********' : '',
  },
  inputValidities: {
    currentPassword: false,
    password: false,
    confirmPassword: false
  },
  formIsValid: false,
}


const ChangePassword = ({ navigation }) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState]
  )

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error)
    }
  }, [error])

  return (
    <SafeAreaView style={commonStyles.area}>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, marginHorizontal: 22, alignItems: 'center' }}>

        <View style={{ marginTop: 22 }}>
          <Image
            source={illustrations.illustration6}
            style={styles.illustration}
          />
        </View>

        <Text style={styles.title}>Change Password</Text>
        <Text style={styles.subTitle}>Set a name for your profile, here's
          the password</Text>

        {/* Input container */}
        <View style={{
          marginTop: 32
        }}>
          <Text style={{ color: COLORS.black3 }}>Current Password</Text>
          <Input
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['currentPassword']}
            autoCapitalize="none"
            id="currentPassword"
            placeholder="currentPassword"
            secureTextEntry={true}
          />
          <Text style={{ color: COLORS.black3 }}>New Password</Text>
          <Input
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['password']}
            autoCapitalize="none"
            id="password"
            placeholder="Password"
            secureTextEntry={true}
          />

          <Text style={{ color: COLORS.black3 }}>Repeat Password</Text>
          <Input
            onInputChanged={inputChangedHandler}
            errorText={formState.inputValidities['confirmPassword']}
            autoCapitalize="none"
            id="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>

        <Button
          title="UPDATE"
          onPress={() => navigation.navigate("ChangePassword")}
          filled
          color={COLORS.primary}
          borderColor={COLORS.primary}
          style={{
            width: SIZES.width - 44,
            marginTop: 32
          }}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: 'semiBoldTitillium',
    color: COLORS.primary,
    marginVertical: 22
  },
  subTitle: {
    fontSize: 14,
    color: COLORS.black2,
    fontFamily: '',
    textAlign: 'center',
    marginHorizontal: 33
  },
  illustration: {
    height: 126,
    width: 126,
    marginVertical: 12
  }
})

export default ChangePassword