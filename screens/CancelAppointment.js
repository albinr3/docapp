import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { COLORS, SIZES, icons } from "../constants"
import { SafeAreaView } from 'react-native-safe-area-context'
import ReasonItem from '../components/ReasonItem'

const CancelAppointment = ({ navigation }) => {
  /**
     * Render Header
     */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerIcon}>
          <Image
            source={icons.arrowLeft}
            resizeMode='contain'
            style={styles.arrowLeft}
          />
        </TouchableOpacity>
        <Text style={{
          fontSize: 16,
          fontFamily: "bold",
          color: COLORS.black
        }}>Cancel Booking</Text>
        <TouchableOpacity
          style={styles.headerIcon}>
          <Image
            source={icons.more}
            resizeMode='contain'
            style={styles.moreIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  /***
   * Render content
   */

  const renderContent = () => {
    const [comment, setComment] = useState("");
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

    const handleCommentChange = (text) => {
      setComment(text);
    };
    return (
      <View style={{ marginVertical: 12 }}>
        <Text style={styles.inputLabel}>Please select the reason for the cancellations</Text>
        <View style={{ marginVertical: 16 }}>
          <ReasonItem
            checked={selectedItem === 'Schedule change'} // Check if it's the selected item
            onPress={() => handleCheckboxPress('Schedule change')} // Pass the item title
            title="Schedule change"
          />
          <ReasonItem
            checked={selectedItem === 'Weather conditions'}
            onPress={() => handleCheckboxPress('Weather conditions')}
            title="Weather conditions"
          />
          <ReasonItem
            checked={selectedItem === 'Unexpected Work'}
            onPress={() => handleCheckboxPress('Unexpected Work')}
            title="Unexpected Work"
          />
          <ReasonItem
            checked={selectedItem === 'Childcare Issue'}
            onPress={() => handleCheckboxPress('Childcare Issue')}
            title="Childcare Issue"
          />
          <ReasonItem
            checked={selectedItem === 'Travel Delays'}
            onPress={() => handleCheckboxPress('Travel Delays')}
            title="Travel Delays"
          />
          <ReasonItem
            checked={selectedItem === 'Others'}
            onPress={() => handleCheckboxPress('Others')}
            title="Others"
          />
        </View>
        <Text style={styles.inputLabel}>Add detailed reason</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your reason here..."
          multiline={true}
          numberOfLines={4} // Set the number of lines you want to display initially
          onChangeText={handleCommentChange}
          value={comment}
        />
      </View>
    )
  }

  /**
      * Render submit buttons
      */
  const renderSubmitButton = () => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyBookings")}
          style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {renderContent()}
        </ScrollView>
      </View>
      {renderSubmitButton()}
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
  input: {
    borderColor: "gray",
    borderWidth: .3,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    paddingBottom: 10,
    fontSize: 12,
    height: 150,
    textAlignVertical: "top"
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
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

export default CancelAppointment