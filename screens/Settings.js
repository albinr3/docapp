import { View, Text, Pressable, Image, StyleSheet, Switch, Modal, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants'
import { commonStyles } from '../styles/commonStyles'

const Settings = ({ navigation }) => {
  /**
   * Render header component
   */
  function renderHeader() {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={commonStyles.header1Icon}
        >
          <Image
            resizeMode='contain'
            source={icons.arrowLeft}
            style={{ height: 24, width: 24, tintColor: COLORS.black }}
          />
        </Pressable>
        <Text style={{ marginLeft: 12, fontSize: 17, fontFamily: "regular" }}>Settings</Text>
      </View>
    )
  }

  /***
   * Render App Settings
   */

  function renderAppSettings() {
    const [notificationEnabled, setNotificationEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    const [locationEnabled, setLocationEnabled] = useState(true);
    const [currency, setCurrency] = useState('USD');
    const [language, setLanguage] = useState('English');
    const [isCurrencyModalVisible, setCurrencyModalVisible] = useState(false);
    const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

    const handleNotificationToggle = () => {
      setNotificationEnabled((prevValue) => !prevValue);
    };

    const handleDarkModeToggle = () => {
      setDarkModeEnabled((prevValue) => !prevValue);
    };

    const handleLocationToggle = () => {
      setLocationEnabled((prevValue) => !prevValue);
    };

    const handleCurrencyChange = (value) => {
      setCurrency(value);
      setCurrencyModalVisible(false);
    };

    const handleLanguageChange = (value) => {
      setLanguage(value);
      setLanguageModalVisible(false);
    };

    const currencies = [
      { id: 'USD', name: 'USD - United States Dollar' },
      { id: 'EUR', name: 'EUR - Euro' },
      { id: 'GBP', name: 'GBP - British Pound Sterling' },
      // Add more currencies here
    ];

    const languages = [
      { id: 'English', name: 'English' },
      { id: 'Spanish', name: 'Spanish' },
      { id: 'French', name: 'French' },
      // Add more languages here
    ];

    const renderCurrencyItem = ({ item }) => (
      <Pressable
        style={[styles.optionButton, currency === item.id && styles.optionButtonSelected]}
        onPress={() => handleCurrencyChange(item.id)}
      >
        <Text style={[styles.optionText, currency === item.id && styles.optionTextSelected]}>{item.name}</Text>
      </Pressable>
    );

    const renderLanguageItem = ({ item }) => (
      <Pressable
        style={[styles.optionButton, language === item.id && styles.optionButtonSelected]}
        onPress={() => handleLanguageChange(item.id)}
      >
        <Text style={[styles.optionText, language === item.id && styles.optionTextSelected]}>{item.name}</Text>
      </Pressable>
    );

    return (
      <View style={styles.container}>
        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notificationEnabled}
            onValueChange={handleNotificationToggle}
            thumbColor={notificationEnabled ? COLORS.primary : '#f4f3f4'}
            trackColor={{ false: '#f4f3f4', true: COLORS.primary }}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleDarkModeToggle}
            thumbColor={darkModeEnabled ? COLORS.primary : '#f4f3f4'}
            trackColor={{ false: '#f4f3f4', true: COLORS.primary }}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Enable Location</Text>
          <Switch
            value={locationEnabled}
            onValueChange={handleLocationToggle}
            thumbColor={locationEnabled ? COLORS.primary : '#f4f3f4'}
            trackColor={{ false: '#f4f3f4', true: COLORS.primary }}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Currency</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => setCurrencyModalVisible(true)}
          >
            <Text style={styles.modalButtonText}>{currency}</Text>
          </Pressable>
          <Modal
            visible={isCurrencyModalVisible}
            animationType="slide"
            onRequestClose={() => setCurrencyModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Currency</Text>
              <FlatList
                data={currencies}
                renderItem={renderCurrencyItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setCurrencyModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </Pressable>
            </View>
          </Modal>
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Language</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => setLanguageModalVisible(true)}
          >
            <Text style={styles.modalButtonText}>{language}</Text>
          </Pressable>
          <Modal
            visible={isLanguageModalVisible}
            animationType="slide"
            onRequestClose={() => setLanguageModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Language</Text>
              <FlatList
                data={languages}
                renderItem={renderLanguageItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setLanguageModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </Pressable>
            </View>
          </Modal>
        </View>

      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar hidden={true} />
      <View style={{ marginHorizontal: 12 }}>
        {renderHeader()}
      </View>
      {renderAppSettings()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
    marginTop: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
    fontFamily: "regular"
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,

  },
  modalButtonText: {
    fontSize: 16,
    color: COLORS.primary,
    fontFamily: "regular"
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  modalTitle: {
    fontFamily: "medium",
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  modalCloseButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontFamily: "medium",
    color: '#fff',
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.5)',
    marginBottom: 8,
  },
  optionButtonSelected: {
    backgroundColor: COLORS.primary,
    borderWidth: 0,
  },
  optionText: {
    fontSize: 18,
    color: 'rgba(0,0,0,.5)',
  },
  optionTextSelected: {
    color: '#fff',
  },
});

export default Settings