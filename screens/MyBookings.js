import { View, Text, Pressable, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-virtualized-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from "../constants"
import { doctorConsultationBookings } from '../data/utils'
import SeparateLine from "../components/SeparateLine"

const MyBookings = ({ navigation }) => {
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
        }}>My Appointments</Text>
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

  const AppointmentBlock = ({
    appointmentDate, 
    appointmentTime, 
    status,
    doctorAvatar, 
    doctorName,
    address,
    transactionId
  }) => {
    return (
    <View style={styles.appointmentContainer}>
      <View style={styles.bookingContainer}>
        <Text style={styles.type}>{appointmentDate} - {appointmentTime}</Text>
        <Text style={{
          fontSize: 14,
          fontFamily: "bold",
          color: status == "Confirmed" ? COLORS.green : COLORS.red,
          marginLeft: 12
        }}>{status}</Text>
      </View>
      
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={doctorAvatar}
            style={styles.doctorAvatar}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.name}>{doctorName}</Text>
            <View style={{
              alignItems: 'flex-start',
              marginTop: 4
            }}>
              <Text style={{ fontSize: 14, fontFamily: "regular", color: COLORS.secondaryGray }}>{address}</Text>
              <View style={{flexDirection: "row"}}>
                <Text style={{ fontSize: 14, fontFamily: "regular", color: COLORS.secondaryGray }}>Booking ID: </Text>
                <Text style={{color: COLORS.secondary}}>{transactionId}</Text>
              </View>
              
            </View>
          </View>
        </View>
        <Text style={styles.transactionId}></Text>
      </View>
      <SeparateLine thin = {true}/>
      <View style={styles.historyBottom}>
        <Pressable
          onPress={() => navigation.navigate("CancelAppointment")}
          style={styles.rateContainer}>
          <Text style={styles.rate}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("MyAppointmentDetail")}
          style={styles.viewContainer}>
          <Text style={styles.view}>View</Text>
        </Pressable>
      </View>
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
          data={doctorConsultationBookings}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <AppointmentBlock 
            appointmentDate={item.appointmentDate} 
            appointmentTime={item.appointmentTime}
            status={item.status}
            doctorAvatar={item.doctorAvatar}
            doctorName={item.doctorName}
            price={item.price}
            transactionId={item.transactionId}
            address={item.address}
            
            />
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
  appointmentContainer: { 
    flexDirection: 'column', 
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal:12,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,

    elevation: 10,
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
    height: 80,
    width: 80,
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

export default MyBookings