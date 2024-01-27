import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from "../constants"
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { specialists } from '../data/utils'
import SpecialistCard from '../components/SpecialistCard'
import { markers } from '../data/mapData'
import NearbyHospitalCard from '../components/NearbyHospitalCard'

const DoctorsRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <FlatList
      data={specialists}
      showsVerticalScrollIndicator={false}
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
);

const HospitalsRoute = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={markers}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <NearbyHospitalCard
          image={item.image}
          rating={item.rating}
          name={item.name}
          distance={item.distance}
          time={item.time}
          specialties={item.specialties}
          address={item.address}
          reviews={item.reviews}
        />
      )}
    />
  </View>
);

const renderScene = SceneMap({
  first: DoctorsRoute,
  second: HospitalsRoute,
});


const Favourite = ({ navigation }) => {
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
        }}>Favourites</Text>
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

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Doctors' },
    { key: 'second', title: 'Hospitals' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: COLORS.primary
      }}
      style={{
        backgroundColor: '#fff',
      }}
      renderLabel={({ route, focused, color }) => (
        <Text style={[{ color: focused ? COLORS.black : 'gray' }]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <View style={{ flex: 1 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
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
})
export default Favourite