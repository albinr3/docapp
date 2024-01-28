import { View, Text, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, icons } from '../constants'
import { ScrollView } from 'react-native-virtualized-view';
import RNPickerSelect from 'react-native-picker-select';

const PatientDetails = ({ navigation }) => {
  /**
     * Render Header
     */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.headerIcon}>
          <Image
            source={icons.arrowLeft}
            resizeMode='contain'
            style={styles.arrowLeft}
          />
        </Pressable>
        <Text style={{
          fontSize: 16,
          fontFamily: "bold",
          color: COLORS.black
        }}>Patient Details</Text>
        <Pressable
          style={styles.headerIcon}>
          <Image
            source={icons.more}
            resizeMode='contain'
            style={styles.moreIcon}
          />
        </Pressable>
      </View>
    )
  };

  /**
   * Render content
   */

  const renderContent = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedGenderValue, setSelectedGenderValue] = useState(null);
    const genderPickerRef = useRef();
    const pickerRef = useRef();
    const [age, setAge] = useState(null);
    const [problem, setProblem] = useState(null);

    const items = [
      'Selft',
      'My mother',
      'My child',
      'Other',
    ];

    const genderItems = [
      'Female',
      'Male',
      'Other',
    ];

    return (
      <View>
        <Text style={styles.title}>Booking for</Text>
        <View style={styles.inputContainer}>
          <View style={{ marginHorizontal: 12 }}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Self', value: 'Self' },
                { label: 'My mother', value: 'My mother' },
                { label: 'My child', value: 'My child' },
                { label: 'Other', value: 'Other' },
            ]}
        />
          </View>
        </View>
        <Text style={styles.title}>Gender</Text>
        <View style={styles.inputContainer}>
          <View>
          <RNPickerSelect
            style={{ height:52}}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Female', value: 'Female' },
                { label: 'Male', value: 'Male' },
                { label: 'Male', value: 'Male' },
            ]}
        />
          </View>
        </View>
        <Text style={styles.title}>Your Age</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.picker, { height: 48 }]}
            placeholder="24"
            placeholderTextColor={COLORS.black}
            value={age}
            onChangeText={(value) => setAge(value)}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.title}>Write Your Problem</Text>
        <View>
          <TextInput
            placeholder="Write here"
            placeholderTextColor={COLORS.black}
            style={styles.inputComment}
            multiline={true}
          />
        </View>
      </View>
    )
  }

  /**
 * Render Appointment buttons
 */
  const renderAppointmentButton = () => {

    return (
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.navigate("PaymentMethods")}
          style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView>
          {renderContent()}
        </ScrollView>
      </View>
      {renderAppointmentButton()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 12,
    alignItems: "center"
  },
  headerIcon: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.gray
  },
  arrowLeft: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  moreIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  title: {
    fontSize: 14,
    fontFamily: "regular",
    color: COLORS.black,
    marginVertical: 12
  },
  inputTitle: {
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 12
  },
  inputContainer: {
    flexDirection: 'row',
  alignItems: 'center',
  borderWidth: .4,
  borderColor: COLORS.black,
  borderRadius: 12,
  paddingHorizontal: 10,
  paddingVertical: 2,
  height: 52,
  },
  picker: {
    flex: 1,
    height: 36,
  },
  inputComment: {
    height: 114,
    textAlignVertical: "top",
    borderWidth: .4,
    borderColor: COLORS.black,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  btnContainer: {
    position: "absolute",
    bottom: 22,
    height: 72,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    alignItems: "center"
  },
  btn: {
    height: 48,
    width: SIZES.width - 32,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  btnText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.white
  },
})

export default PatientDetails