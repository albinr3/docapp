import { View, Text, StatusBar, StyleSheet, Pressable, TextInput, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants'
import { AntDesign } from "@expo/vector-icons"
import ScheduleCard from '../components/ScheduleCard'
import { specialists, specialities, userScheduleData } from '../data/utils'
import SpecialityCard from '../components/SpecialityCard'
import HospitalCard from '../components/HospitalCard'
import { ScrollView } from 'react-native-virtualized-view'
import { markers } from '../data/mapData'
import SpecialistCard from '../components/SpecialistCard'
import { useVariables } from '../navigations/Context';
import { Ionicons } from "@expo/vector-icons"


const Home = ({ navigation }) => {
  const { gps, setGps } = useVariables();
  
  /**
   * Render Header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.locationTitle}>Location</Text>
          <View style={styles.locationBottomContainer}>
            <Image
              source={icons.maps}
              resizeMode='contain'
              style={styles.locationIcon}
            />
            <Text style={styles.locationText}>New York, USA</Text>
            <Image
              source={icons.down}
              resizeMode='contain'
              style={styles.downIcon}
            />
          </View>
        </View>
        <View style={styles.headerButtonsContainer}>
          <Pressable 
            onPress={()=>navigation.navigate("CameraQr")}
            style={styles.notificationContainer}>
            <Ionicons
              name="camera-outline"
              size={32}
              color={COLORS.black}
            />
          </Pressable>
          <Pressable 
            onPress={()=>navigation.navigate("Notifications")}
            style={styles.notificationContainer}>
            <View
              style={styles.notificationMarker}
            />
            <Image
              source={icons.bell}
              resizeMode='contain'
              style={styles.bellIcon}
            />
          </Pressable>
        </View>
        
      </View>
    )
  }
  /***
   * Render search bar
   */

  const renderSearchbar = () => {
    const [search, setSearch] = useState("")
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <Pressable>
            <AntDesign name="search1" size={28} color={COLORS.primary} />
          </Pressable>
          <TextInput
            placeholder='Search'
            placeholderTextColor="gray"
            value={search}
            onChangeText={(value) => setSearch(value)}
            style={{
              marginLeft: 8
            }}
          />
        </View>
        <Pressable style={styles.filterIconContainer}>
          <Image
            source={icons.filter2}
            resizeMode='contain'
            style={styles.filterIcon}
          />
        </Pressable>
      </View>
    )
  }
  /***
   * Render Upcomming Schedule
   */
  const renderUpcommingSchedule = () => {
    return (
      <View>
        <View style={styles.headerSectionContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Text style={styles.headerSectionTitle}>Upcomming Schedule</Text>
            <View style={styles.upcommingNumContainer}>
              <Text style={styles.upcommingNum}>8</Text>
            </View>
          </View>
          <Pressable>
            <Text style={styles.headerSectionSubtitle}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          data={userScheduleData}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item, index }) => (
            <ScheduleCard
              doctorName={item.doctorName}
              doctorAvatar={item.doctorAvatar}
              type={item.type}
              date={item.date}
              starHour={item.startHour}
              endHour={item.endHour}
            />
          )}
        />

      </View>
    )
  }
  /**
   * Render doctor speciality
   */
  const renderDoctorSpeciality = () => {
    return (
      <View>
        <View style={styles.headerSectionContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Text style={styles.headerSectionTitle}>Doctor speciality</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("Category")}
          >
            <Text style={styles.headerSectionSubtitle}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          data={specialities}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <SpecialityCard
              icon={item.icon}
              name={item.name}
            />
          )}
        />
      </View>
    )
  }

  /***
   * Render Nearby hospital
   */

  const renderNearbyHospitals = () => {
    return (
      <View>
        <View style={styles.headerSectionContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Text style={styles.headerSectionTitle}>Nearby Hospitals</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("AllHospitals")}
          >
            <Text style={styles.headerSectionSubtitle}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          horizontal={true}
          data={markers}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <HospitalCard
              name={item.name}
              image={item.image}
              rating={item.rating}
              time={item.time}
              distance={item.distance}
            />
          )}
        />

      </View>
    )
  }

  /**
   * Render Top Specialist
   */

  const renderTopSpecialists = () => {
    return (
      <View>
        <View style={styles.headerSectionContainer}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
          }}>
            <Text style={styles.headerSectionTitle}>Top Specialist</Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate("AllSpecialists")}
          >
            <Text style={styles.headerSectionSubtitle}>See All</Text>
          </Pressable>
        </View>
        <FlatList
          data={specialists}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <SpecialistCard
              image={item.image}
              type={item.type}
              name={item.name}
              position={item.position}
              rating={item.rating}
              numReviews={item.numReviews}
            />
          )}
        />

      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden={false} barStyle='dark-content' backgroundColor={COLORS.white}/>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderSearchbar()}
          {renderUpcommingSchedule()}
          {renderDoctorSpeciality()}
          {renderNearbyHospitals()}
          {renderTopSpecialists()}
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
    justifyContent: "space-between"
  },
  locationTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: "gray",
    marginBottom: 6
  },
  locationBottomContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationIcon: {
    height: 18,
    width: 18,
    tintColor: COLORS.primary
  },
  locationText: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black,
    marginHorizontal: 4
  },
  downIcon: {
    height: 12,
    width: 12,
    tintColor: COLORS.black
  },
  notificationContainer: {
    height: 42,
    width: 42,
    borderRadius: 999,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15
  },

  headerButtonsContainer: {
    flexDirection: "row",
  },
  bellIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black
  },
  notificationMarker: {
    height: 7,
    width: 7,
    borderRadius: 999,
    backgroundColor: COLORS.red,
    position: "absolute",
    zIndex: 999,
    top: 10,
    right: 12
  },
  searchBarContainer: {
    flexDirection: "row",
    marginVertical: 12
  },
  searchInputContainer: {
    flex: 1,
    height: 42,
    borderRadius: 6,
    borderColor: "rgba(0,0,0,.3)",
    borderWidth: .6,
    paddingHorizontal: 4,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  filterIconContainer: {
    height: 42,
    width: 42,
    backgroundColor: COLORS.primary,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8
  },
  filterIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.white
  },
  headerSectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  upcommingNumContainer: {
    height: 22,
    width: 22,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8
  },
  upcommingNum: {
    fontSize: 8,
    color: COLORS.white,
    fontFamily: "regular"
  },
  headerSectionTitle: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  headerSectionSubtitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.primary
  }
})

export default Home