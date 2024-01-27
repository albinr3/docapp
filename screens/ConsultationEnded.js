import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderIcon from '../components/HeaderIcon'
import { COLORS, SIZES, icons, images } from "../constants"
import { Ionicons } from "@expo/vector-icons"

const ConsultationEnded = ({ navigation }) => {
  /**
     * Render Review buttons
  */
  const renderButton = () => {
    return (
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddDoctorReview")}
          style={styles.btn}>
          <Text style={styles.btnText}>Add Review</Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        <View style={styles.headerIconContainer}>
          <HeaderIcon
            icon={icons.back}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.timeContainer}>
            <Ionicons name="time" size={54} color={COLORS.white} />
          </View>
          <Text style={styles.endTitle}>The Consultation Session has ended</Text>
          <Text style={styles.endSubtitle}>Recording have been saved in activity</Text>

          <View style={{
            marginBottom: 16,
            marginTop: 22
          }}>
            <Image
              source={images.doctor5}
              resizeMode='contain'
              style={styles.doctorAvatar}
            />
            <Image
              source={icons.verified}
              resizeMode='contain'
              style={styles.verifiedIcon}
            />
          </View>
          <Text style={styles.doctorName}>Dr Jonny Wilson</Text>
          <Text style={styles.doctorPosition}>Dentist</Text>
          <View style={styles.locationContainer}>
            <Image
              source={icons.maps}
              resizeMode='contain'
              style={styles.locationIcon}
            />
            <Text style={styles.locationName}>New York, United States</Text>
          </View>
        </View>
      </View>
      {renderButton()}
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
    height: 140
  },
  headerIconContainer: {
    width: SIZES.width - 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center"
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
  timeContainer: {
    height: 112,
    width: 112,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center"
  },
  endTitle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 22
  },
  endSubtitle: {
    fontSize: 14,
    fontFamily: "regular",
    color: "gray"
  },
  doctorAvatar: {
    height: 104,
    width: 104,
    borderRadius: 999
  },
  verifiedIcon: {
    height: 24,
    width: 24,
    position: "absolute",
    bottom: 10,
    right: -4
  },
  doctorName: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  doctorPosition: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray"
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12
  },
  locationIcon: {
    height: 18,
    width: 18,
    tintColor: COLORS.primary,
    marginRight: 6
  },
  locationName: {
    fontSize: 14,
    fontFamily: "regular",
    color: "gray"
  }
})
export default ConsultationEnded