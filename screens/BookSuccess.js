import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { COLORS, SIZES, icons } from '../constants'

const BookSuccess = ({ navigation }) => {
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
        }}>Payment Success</Text>
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

  const renderContent = () => {
    return (
      <View>
        <View style={styles.resumeContainer}>
          <Image
            source={icons.checked}
            resizeMode='contain'
            style={styles.checkedIcon}
          />
          <Text style={styles.title}>Payment Successful!</Text>
          <Text style={styles.subtitle}>You have successfully booked appointment with</Text>
          <Text style={styles.doctorName}>Dr. Jonny Wilson</Text>
          <View style={styles.separateLine} />
          <View style={{ marginTop: 16 }}>
            <View style={styles.itemContainer}>
              <View style={styles.itemLeftContainer}>
                <Image
                  source={icons.user2}
                  resizeMode='contain'
                  style={styles.itemIcon}
                />
                <Text style={styles.itemName}>Ester Howard</Text>
              </View>
              <View style={styles.itemRightContainer}>
                <Image
                  source={icons.dollar}
                  resizeMode='contain'
                  style={styles.itemIcon}
                />
                <Text style={styles.itemName}>$20</Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.itemLeftContainer}>
                <Image
                  source={icons.calendar}
                  resizeMode='contain'
                  style={styles.itemIcon}
                />
                <Text style={styles.itemName}>16 Aug 2024</Text>
              </View>
              <View style={styles.itemRightContainer}>
                <Image
                  source={icons.time}
                  resizeMode='contain'
                  style={styles.itemIcon}
                />
                <Text style={styles.itemName}>10: 00 AM</Text>
              </View>
            </View>
          </View>
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
          onPress={() => navigation.navigate("Home")}
          style={styles.btn}>
          <Text style={styles.btnText}>View Appointment</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={[styles.btn, {
            backgroundColor: COLORS.white,
            borderWidth: 1,
            borderColor: COLORS.primary
          }]}>
          <Text style={[styles.btnText, { color: COLORS.primary }]}>Go To Home</Text>
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
  resumeContainer: {
    alignItems: "center",
    marginVertical: 52
  },
  checkedIcon: {
    height: 112,
    width: 112,
    tintColor: COLORS.primary
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 16
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black
  },
  doctorName: {
    fontSize: 16,
    fontFamily: "bold",
    color: COLORS.black
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemLeftContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: (SIZES.width - 24) / 2,
    marginVertical: 6
  },
  itemRightContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: (SIZES.width - 24) / 2
  },
  itemIcon: {
    height: 16,
    width: 16,
    tintColor: COLORS.primary,
    marginRight: 16
  },
  itemName: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
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
  btnContainer: {
    position: "absolute",
    bottom: 12,
    height: 136,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    alignItems: "center",
    borderTopColor: "gray",
    borderTopWidth: .1
  },
  btn: {
    height: 48,
    width: SIZES.width - 32,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 12
  },
  btnText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.white
  }
})

export default BookSuccess