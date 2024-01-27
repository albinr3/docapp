import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS, SIZES, illustrations } from '../constants';
import Button from '../components/Button';

const SuccessRegister = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Image
          source={illustrations.successConfirmed}
          resizeMode='contain'
          style={styles.image}
        />
        <Text style={styles.title}>Successfully Registered!</Text>
        <Text style={styles.description}>Congratulations! Your account is registered in Medecina.</Text>
        <View style={styles.buttonContainer}>
          <Button
            filled
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: SIZES.width * 0.50,
    height: SIZES.height * 0.50,
  },
  title: {
    ...FONTS.h3,
    marginVertical: 12,
  },
  description: {
    ...FONTS.body4,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: SIZES.width - 32,
  },
});

export default SuccessRegister;