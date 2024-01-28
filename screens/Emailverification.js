import { View, Text, Pressable, StyleSheet, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLORS, SIZES } from '../constants'
import * as Animatable from "react-native-animatable"
import Button from '../components/Button'
import { commonStyles } from '../styles/commonStyles'
import { MaterialIcons } from "@expo/vector-icons"
import { OtpInput } from "react-native-otp-entry"

const Emailverification = ({ navigation }) => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (error) {
            Alert.alert('An error occured', error)
        }
    }, [error])

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={COLORS.primary}/>
            <View style={commonStyles.header}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={commonStyles.backIcon}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color={COLORS.black} />
                </Pressable>
                <Text style={commonStyles.headerTitle}>Verification</Text>
                <Text style={commonStyles.subHeaderTitle}>We have sent a code to your email</Text>
                <Text style={commonStyles.subHeaderTitleBold}>example@gmail.com</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={commonStyles.footer}>
                <View style={styles.center}>
                    <Text style={commonStyles.inputHeader}>Code</Text>
                    <Pressable
                        onPress={() => console.log("Resend")}
                    >
                        <Text style={{ textDecorationLine: 'underline' }}>Resend</Text>
                    </Pressable>
                </View>
                <View style={styles.otpContainer}>
                  <OtpInput 
                    numberOfDigits={4}
                    onTextChange={(text) => console.log(text)} 
                    focusColor={COLORS.primary}
                    focusStickBlinkingDuration={500}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    theme={otpInputStyles}
                  />
                </View>
                <Button
                    title="VERIFY"
                    isLoading={isLoading}
                    filled
                    onPress={() => navigation.navigate('ResetPassword')}
                    style={commonStyles.btn1}
                />
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    otpContainer: {
      marginVertical: 22,
      width: SIZES.width - 64,
    },
});

const otpInputStyles = {
  pinCodeContainerStyle: {
    backgroundColor: COLORS.secondaryWhite,
    borderColor: COLORS.secondaryWhite,
    borderWidth: 1,
    borderRadius: 10,
    height: 58,
    width: 58,
  },
  pinCodeTextStyle: {
    color: COLORS.black,
  },
};

export default Emailverification