import { View, Text, StyleSheet, Pressable, Image, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, icons, images } from '../constants'
import { ScrollView } from 'react-native-virtualized-view'
import FeatureItem from '../components/FeatureItem'
import DoctorHeader from '../components/DoctorHeader'

const BookAppointment = ({ navigation }) => {
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
        }}>Book Appointment</Text>
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

  /***
   * Render content
   */

  const renderContent = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);

    // Sample list of days where doctor is available
    const days = [
      '1 Oct', '2 Oct', '3 Oct', '4 Oct', '5 Oct', '6 Oct', '7 Oct', '8 Oct', '9 Oct', '10 Oct'
    ];
    // Sample list of time where doctor is available
    const hours = [
      '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
      '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    const renderHourItem = ({ item }) => {
      const isSelected = item === selectedHour;
      return (
        <Pressable
          onPress={() => setSelectedHour(item)}
          style={[styles.hourItem, isSelected && styles.selectedHour]}
        >
          <Text style={isSelected ? styles.selectedText : styles.text}>{item}</Text>
        </Pressable>
      );
    };


    const renderDayItem = ({ item }) => {
      const isSelected = item === selectedDay;
      return (
        <Pressable
          onPress={() => setSelectedDay(item)}
          style={[styles.dayItem, isSelected && styles.selectedDay]}>
          <Text style={isSelected ? styles.selectedText : styles.text}>{item}</Text>
        </Pressable>
      );
    };

    return (
      <View>
        <DoctorHeader/>
        <View style={styles.separateLine} />
        <View style={styles.featureContainer}>
          <FeatureItem
            icon={icons.patients}
            name="7,500+"
            description="Patients"
          />
          <FeatureItem
            icon={icons.work}
            name="10+"
            description="Years Exp."
          />
          <FeatureItem
            icon={icons.star2}
            name="4.9+"
            description="Rating"
          />
          <FeatureItem
            icon={icons.message}
            name="4,956"
            description="Reviews"
          />
        </View>
        <Text style={styles.subtitle}>Book Appointment</Text>
        <Text style={styles.subName}>Day</Text>
        <FlatList
          data={days}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderDayItem}
          keyExtractor={(item) => item}
        />
        <Text style={styles.subName}>Time</Text>
        <FlatList
          data={hours}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderHourItem}
          keyExtractor={(item) => item}
        />
      </View>
    )
  }

  /**
     * Render custom schedule button
     */
  const renderCustomSchedule = () => {
    return (
      <View style={styles.customContainer}>
        <Text>Want a custom schedule?</Text>
        <Pressable><Text style={styles.textCustomSchedule}>Request Schedule</Text></Pressable>
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
          onPress={() => navigation.navigate("SelectPackage")}
          style={styles.btn}>
          <Text style={styles.btnText}>Make Appointment</Text>
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
          {renderCustomSchedule()}
        </ScrollView>
        
      </View>
      
      {renderAppointmentButton()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    
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
    fontSize: 18,
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
  featureContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 6
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
    fontSize: 18,
    fontFamily: "medium",
    color: COLORS.black,
    marginVertical: 10

  },
  dayItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginRight: 10,
    borderRadius: 24,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: .3
  },
  selectedDay: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary
  },
  hourItem: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginRight: 10,
    borderRadius: 24,
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: .3
  },
  selectedHour: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
  selectedText: {
    color: 'white',
    fontSize: 16,
  },
  customContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.gray,
    height: 38,
    justifyContent: "space-between",
    borderRadius: 16,
    marginTop: 24,
    
  },
  textCustomSchedule:{
    color: "#1DBAB5"
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

export default BookAppointment