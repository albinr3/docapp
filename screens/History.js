import { View, Text, Pressable, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from "../constants"
import { doctorConsultationHistory } from '../data/utils'

const History = ({ navigation }) => {
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
        }}>History</Text>
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

  /**
   * Render content
   */

  const renderContent = () => {
    return (
      <View>
        <FlatList
          data={doctorConsultationHistory}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: 'column' }}>
              <View style={styles.bookingContainer}>
                <Text style={styles.type}>{item.specialization}</Text>
                <Text style={{
                  fontSize: 14,
                  fontFamily: "bold",
                  color: item.status == "Confirmed" ? COLORS.green : COLORS.red,
                  marginLeft: 12
                }}>{item.status}</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={item.doctorAvatar}
                    style={styles.doctorAvatar}
                  />
                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.name}>{item.doctorName}</Text>
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 4
                    }}>
                      <Text style={{ fontSize: 14, fontFamily: "bold" }}>${item.price}</Text>
                      <Text style={{ fontSize: 12, fontFamily: "regular", marginHorizontal: 2 }}> | {item.appointmentDate}</Text>
                      <Text style={{ fontSize: 12, fontFamily: "regular" }}> | {item.appointmentTime}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.transactionId}>{item.transactionId}</Text>
              </View>
              <View style={styles.historyBottom}>
                <Pressable
                  onPress={() => navigation.navigate("MyAppointmentDetail")}
                  style={styles.rateContainer}>
                  <Text style={styles.rate}>View</Text>
                </Pressable>
                <Pressable
                  onPress={() => navigation.navigate("AddDoctorReview")}
                  style={styles.viewContainer}>
                  <Text style={styles.view}>Rate</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
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
  bookingContainer: {
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    marginVertical: 12,
    flexDirection: 'row',
    paddingBottom: 4
  },
  type: {
    fontSize: 14,
    fontFamily: "bold"
  },
  doctorAvatar: {
    height: 60,
    width: 60,
    borderRadius: 8
  },
  viewContainer: {
    height: 38,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8
  },
  view: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: "regular"
  },
  rateContainer: {
    height: 38,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8
  },
  rate: {
    color: COLORS.primary,
    fontSize: 14,
    fontFamily: "regular"
  },
  transactionId: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.gray5,
    fontFamily: "regular"
  },
  historyBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default History 