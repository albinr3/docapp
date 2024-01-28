import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, illustrations } from '../constants';
import { commonStyles } from '../styles/commonStyles';
import { OtpInput } from "react-native-otp-entry";
import Button from '../components/Button';

const PhoneVerification = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.area}>
      <StatusBar hidden={false} barStyle='dark-content' backgroundColor={COLORS.white}/>
      <View style={pageStyles.container}>
        <Text style={pageStyles.title}>Enter Code</Text>
        <Text style={pageStyles.subTitle}>Enter the 6-digit Emailverification sent to +62852000342</Text>
        <View>
          <Image
            source={illustrations.illustration6}
            style={pageStyles.illustration}
          />
        </View>

        <View style={pageStyles.otpContainer}>
          <OtpInput 
            numberOfDigits={4}
            onTextChange={(text) => console.log(text)} 
            focusColor={COLORS.primary}
            focusStickBlinkingDuration={500}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            theme={otpInputStyles}
          />
        </View>

        <View style={pageStyles.resendContainer}>
          <Text>Resend code in</Text>
          <Text style={pageStyles.resendText}> 43 </Text>
          <Text>seconds</Text>
        </View>

        <Button
          title="CONTINUE"
          color={COLORS.primary}
          borderColor={COLORS.primary}
          onPress={() => navigation.navigate("Signup")}
          filled
          style={pageStyles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const pageStyles = StyleSheet.create({
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
    color: COLORS.black,
    fontFamily: "regular",
    textAlign: 'center',
  },
  illustration: {
    height: 126,
    width: 126,
    marginVertical: 32,
  },
  otpContainer: {
    marginTop: 12,
    width: SIZES.width - 64,
  },
  resendContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  resendText: {
    color: COLORS.primary,
  },
  button: {
    width: SIZES.width - 44,
    marginVertical: 44,
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

export default PhoneVerification;