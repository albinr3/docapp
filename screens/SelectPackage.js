import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { COLORS, SIZES, icons } from "../constants"
import{ Ionicons } from "@expo/vector-icons"
import RNPickerSelect from 'react-native-picker-select';
import PackageItem from '../components/PackageItem'


const SelectPackage = ({ navigation }) => {
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
            }}>Select Package</Text>
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
    }

    const renderContent  = ()=>{
      const [selectedItem, setSelectedItem] = useState(null);

      const handleCheckboxPress = (itemTitle) => {
        if (selectedItem === itemTitle) {
          // If the clicked item is already selected, deselect it
          setSelectedItem(null);
        } else {
          // Otherwise, select the clicked item
          setSelectedItem(itemTitle);
        }
      };

      return (
        <View>
            <Text style={styles.inputTitle}>Select Duration</Text>
            <View style={styles.inputContainer}>
            <Ionicons name="time" size={24} color={COLORS.primary} />
            <View style={{ marginHorizontal: 12 }}>
            <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: '30 minutes', value: '30 minutes' },
                { label: '45 minutes', value: '45 minutes' },
                { label: '1 hour', value: '1 hour' },
                { label: '2 hours', value: '2 hours' },
            ]}
        />
            </View>
          </View>
          <Text style={styles.inputTitle}>Select Package</Text>
          <PackageItem
              checked={selectedItem === 'Messaging'} // Check if it's the selected item
              onPress={() => handleCheckboxPress('Messaging')} // Pass the item title
              title="Messaging"
              subtitle="Chat with Doctor" 
              price="20"
              duration="30 mins"
              icon={icons.message}
          />
           <PackageItem
              checked={selectedItem === 'Voice call'}
              onPress={() => handleCheckboxPress('Voice call')}
              title="Voice call"
              subtitle="Voice call with Doctor" 
              price="40"
              duration="30 mins"
              icon={icons.phone}
          />
          <PackageItem
              checked={selectedItem === 'Video call'}
              onPress={() => handleCheckboxPress('Video call')}
              title="Video call"
              subtitle="Video call with Doctor" 
              price="60"
              duration="30 mins"
              icon={icons.videoCamera}
          />
          <PackageItem
              checked={selectedItem === 'In Person'}
              onPress={() => handleCheckboxPress('In Person')}
              title="In Person"
              subtitle="In person visit with Doctor" 
              price="100"
              duration="30 mins"
              icon={icons.user2}
          />
        </View>
      )
    }

      /**
     * Render Appointment buttons
     */
  const renderAppointmentButton = ()=>{
    
    return (
        <View style={styles.btnContainer}>
            <Pressable 
            onPress={()=>navigation.navigate("PatientDetails")}
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
locationContainer: {
  flexDirection: "row",
  alignItems: "center"
},
separateLine: {
  marginVertical: 8,
  borderBottomWidth: .3,
  borderBottomColor: COLORS.gray4,
  width: "100%"
},
separateLine2: {
  borderBottomWidth: .3,
  borderBottomColor: COLORS.gray4,
  width: "100%",
  marginBottom: 6
},
h4: {
  fontSize: 16,
  fontFamily: "medium",
  color: COLORS.black,
  marginVertical: 6
},
subtitle: {
  textTransform: "uppercase",
  color: "gray",
  fontSize: 16,
  fontFamily: "regular",
  marginVertical: 12
},
subName: {
  fontSize: 16,
  fontFamily: "medium",
  color: COLORS.black,
  marginVertical: 6
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
icon: {
  marginRight: 10,
},
dropdownContainer: {
  flex: 1,
},
dropdown: {
  backgroundColor: 'white',
},
dropdownItem: {
  justifyContent: 'flex-start',
},
dropDown: {
  backgroundColor: 'white',
  zIndex: 1000,
},
picker: {
  flex: 1,
  height: 40,
},
})
export default SelectPackage