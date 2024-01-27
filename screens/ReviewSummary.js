import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-virtualized-view'
import { COLORS, SIZES, icons, images } from '../constants'
import { Ionicons } from "@expo/vector-icons"

const ReviewSummary = ({ navigation }) => {
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
        }}>Review Summary</Text>
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
  };

  /**
   * Render content
   */

  const renderContent = () => {
    return (
      <View>
        <View style={styles.doctorInfoContainer}>
          <View>
            <TouchableOpacity>
              <Image
                source={images.doctor1}
                resizeMode='contain'
                style={styles.avatar}
              />
              <View style={styles.verified}>
                <Image
                  source={icons.verified}
                  resizeMode='contain'
                  style={{
                    height: 24,
                    width: 24
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            marginLeft: 16
          }}>
            <Text style={styles.doctorName}>Dr. Jonny Wilson</Text>
            <Text style={styles.doctorPosition}>Dentist</Text>
            <View style={styles.locationContainer}>
              <Image
                source={icons.maps}
                resizeMode='contain'
                style={{
                  height: 16,
                  width: 16,
                  tintColor: COLORS.primary
                }}
              />
              <Text style={[styles.doctorPosition, { marginHorizontal: 4 }]}>New York, United States</Text>
              <Image
                source={icons.direction}
                resizeMode='contain'
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.primary
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.separateLine} />
        <View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Date & Hour</Text>
            <Text style={styles.reviewItemRight}>August 24, 2024 | 10: 00 AM</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Package</Text>
            <Text style={styles.reviewItemRight}>Messaging</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Duration</Text>
            <Text style={styles.reviewItemRight}>30 minutes</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Booking for</Text>
            <Text style={styles.reviewItemRight}>Selft</Text>
          </View>
        </View>
        <View style={styles.separateLine} />
        <View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Amount</Text>
            <Text style={styles.reviewItemRight}>$20</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Duration (30 mins)</Text>
            <Text style={styles.reviewItemRight}>1X$20</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Duration</Text>
            <Text style={styles.reviewItemRight}>30 minutes</Text>
          </View>
          <View style={styles.reviewItemContainer}>
            <Text style={styles.reviewItemLeft}>Total</Text>
            <Text style={styles.reviewItemRight}>$20</Text>
          </View>
        </View>
        <View style={styles.separateLine} />
        <View style={styles.reviewItemContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Ionicons name="cash-outline" size={24} color={COLORS.primary} />
            <Text style={[styles.reviewItemLeft, { marginLeft: 6 }]}>Cash</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("PaymentMethods")}>
            <Text style={[styles.reviewItemRight, { color: COLORS.primary }]}>Change</Text>
          </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("BookSuccess")}
          style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
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
  doctorDetails: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
  },
  doctorInfoContainer: {
    flexDirection: "row",
    marginVertical: 6,
    alignItems: "center"
  },
  avatar: {
    height: 84,
    width: 84,
    borderRadius: 999
  },
  verified: {
    position: "absolute",
    top: 50,
    right: -6,
    zIndex: 999
  },
  doctorName: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
  },
  doctorPosition: {
    fontSize: 14,
    fontFamily: "regular",
    color: "gray"
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
  reviewItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 6
  },
  reviewItemLeft: {
    fontSize: 14,
    color: "rgba(0,0,0,1)",
    fontFamily: "regular"
  },
  reviewItemRight: {
    fontSize: 14,
    fontFamily: "medium",
    color: "black"
  },
  btnContainer: {
    position: "absolute",
    bottom: 12,
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

export default ReviewSummary