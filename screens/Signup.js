import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, FlatList, TextInput, StyleSheet, StatusBar } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { COLORS, SIZES, icons, illustrations } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';

const Signup = ({ navigation }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            item: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`,
          };
        });

        setAreas(areaData);
        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == 'US');

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.areaItem}
        onPress={() => {
          setSelectedArea(item);
          setModalVisible(false);
        }}
      >
        <Image
          source={{ uri: item.flag }}
          style={styles.areaFlag}
        />
        <Text style={styles.areaText}>{item.item}</Text>
      </TouchableOpacity>
    );
  };

  const renderAreasCodesModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <FlatList
              data={areas}
              renderItem={renderItem}
              keyExtractor={(item) => item.code}
              verticalScrollIndicator={false}
              style={styles.modalList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={commonStyles.area}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Text style={styles.title}>Registration</Text>
        <Text style={styles.subTitle}>
          Enter your mobile phone number, we will send
          you OTP to verify later.
        </Text>

        <View>
          <Image
            source={illustrations.illustration2}
            style={styles.illustration}
          />
        </View>

        <View style={styles.flagButtonContainer}>
          <TouchableOpacity
            style={styles.flagButton}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.flagIconContainer}>
              <Image
                source={icons.down}
                style={styles.flagIcon}
              />
            </View>
            <View style={styles.flagImageContainer}>
              <Image
                source={{ uri: selectedArea?.flag }}
                resizeMode="contain"
                style={styles.flagImage}
              />
            </View>
            <View style={styles.callingCodeContainer}>
              <Text style={styles.callingCodeText}>
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="Enter your phone number"
            placeholderTextColor={COLORS.black2}
            selectionColor="#111"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
        <Button
            title="SEND VIA WHATSAPP"
            onPress={() => navigation.navigate('PhoneVerification')}
            filled
            style={styles.sendViaWhatsappButton}
          />
          <Button
            title="SEND VIA SMS"
            onPress={() => navigation.navigate('PhoneVerification')}
            color={COLORS.secondary}
            borderColor={COLORS.secondary}
            style={styles.sendViaSmsButton}
          />
        </View>

        <View>
          <Text style={styles.termsAndConditionsContainer}>
            By creating and/or using an account, you
          </Text>
          <View style={styles.termsTextContainer}>
            <Text style={styles.termsText}>aggree to our</Text>
            <TouchableOpacity>
              <Text style={styles.termsLink}> Terms and Conditions.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {renderAreasCodesModal()}
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
    color: COLORS.black,
    fontFamily: "regular",
    textAlign: 'center',
  },
  illustration: {
    height: 126,
    width: 126,
    marginVertical: 32,
  },
  flagButtonContainer: {
    flexDirection: 'row',
    borderColor: COLORS.black2,
    borderWidth: 0.4,
    borderRadius: 12,
    height: 58,
    width: SIZES.width - 44,
    alignItems: 'center',
  },
  flagButton: {
    width: 90,
    height: 50,
    marginHorizontal: 5,
    flexDirection: 'row',
    fontSize: 12,
  },
  flagIconContainer: {
    justifyContent: 'center',
  },
  flagIcon: {
    width: 10,
    height: 10,
    tintColor: '#111',
  },
  flagImageContainer: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  flagImage: {
    width: 30,
    height: 30,
  },
  callingCodeContainer: {
    justifyContent: 'center',
    marginLeft: 5,
  },
  callingCodeText: {
    color: '#111',
    fontSize: 12,
  },
  phoneNumberInput: {
    flex: 1,
    marginVertical: 10,
    height: 40,
    fontSize: 14,
    color: '#111',
  },
  buttonContainer: {
    marginVertical: 52,
  },
  sendViaSmsButton: {
    width: SIZES.width - 44,
    marginTop: 12,
  },
  sendViaWhatsappButton: {
    width: SIZES.width - 44,
  },
  termsAndConditionsContainer: {
    fontSize: 12,
    color: COLORS.black,
  },
  termsTextContainer: {
    flexDirection: 'row',
  },
  termsText: {
    fontSize: 12,
    color: COLORS.black,
  },
  termsLink: {
    fontSize: 12,
    color: COLORS.secondary,
  },
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
  },
  modalList: {
    padding: 20,
    marginBottom: 20,
  },
  areaItem: {
    padding: 10,
    flexDirection: 'row',
  },
  areaFlag: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  areaText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Signup;