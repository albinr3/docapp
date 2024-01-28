import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { COLORS, SIZES, icons, images } from '../constants'
import PaymentMethodItem from '../components/PaymentMethodItem'

const PaymentMethods = ({ navigation }) => {
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
        }}>Payment Methods</Text>
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
* Render Appointment buttons
*/
  const renderAppointmentButton = () => {

    return (
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.navigate("AddCard")}
          style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </Pressable>
      </View>
    )
  }


  const renderContent = () => {
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
        <Text style={styles.title}>Credit and Debit Card</Text>
        <PaymentMethodItem
          checked={selectedItem === 'Add a New Card'} // Check if it's the selected item
          onPress={() => handleCheckboxPress('Add a New Card')} // Pass the item title
          title="Add a New Card"
          icon={images.creditCard}
        />
        <Text style={styles.title}>More Payment Options</Text>
        <PaymentMethodItem
          checked={selectedItem === 'Paypal'}
          onPress={() => handleCheckboxPress('Paypal')}
          title="Paypal"
          icon={images.paypal}
        />
        <PaymentMethodItem
          checked={selectedItem === 'Apple Pay'}
          onPress={() => handleCheckboxPress('Apple Pay')}
          title="Apple Pay"
          icon={icons.apple}
        />
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
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 16
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
  }
})

export default PaymentMethods