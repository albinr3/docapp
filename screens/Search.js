import { View, Text, Image, Pressable, TextInput, Modal, StyleSheet, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, FONTS, icons } from '../constants'
import { Ionicons, Octicons } from "@expo/vector-icons"
import { keywordsData, specialists } from '../data/utils'
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from '../styles/commonStyles'
import Button from '../components/Button'
import { markers } from '../data/mapData'

const Search = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  // render Search bar
  const renderSearchBar = () => {
    return (
      <View style={styles.searchBarContainer}>
        <View style={{
          marginHorizontal: SIZES.padding
        }}>
          <Ionicons name="search" size={24} color={COLORS.gray4} />
        </View>
        <TextInput
          placeholder='Search doctor, hospitals...'
          onChangeText={handleSearch}
          placeholderTextColor={COLORS.gray5}
        />
      </View>
    )
  }

  // Render most used keywords
  const renderKeywords = () => {
    return (
      <View>
        <Text style={{ ...FONTS.body3, marginBottom: 6 }}>Recent Keywords</Text>
        <FlatList
          horizontal={true}
          data={keywordsData}
          keyExtractor={item => item.id}
          renderItem=
          {({ item, index }) => (
            <Pressable
              onPress={() => console.log("Search doctors by keywords")}
              style={{
                height: 46,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: COLORS.gray6,
                borderRadius: 30,
                paddingHorizontal: 10,
                marginHorizontal: 8
              }}
              key={index}>
              <Text style={{ color: COLORS.tertiaryBlack, fontSize: 16 }}>{item.keyword}</Text>
            </Pressable>
          )}
        />
      </View>
    )
  }

  // Render Suggested Hospitals
  const rendersuggestedHospitals = () => {
    const navigation = useNavigation()
    return (
      <View style={{ marginVertical: 8 }}>
        <Text style={{ ...FONTS.body3, marginBottom: 6 }}>Suggested Hospitals</Text>
        {
          markers.map((item, index) => (
            <Pressable
              onPress={() => navigation.navigate("HospitalDetails")}
              key={index}
              style={{
                flexDirection: 'row',
                marginVertical: 8
              }}>
              <Image
                source={item.image}
                style={{
                  width: 60,
                  height: 50,
                  borderRadius: 8
                }}
              />
              <View style={{ flexDirection: "column", marginLeft: 12 }}>
                <Text style={{ fontSize: 16, fontFamily: "regular", marginBottom: 4 }}>{item.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Octicons name="star" size={24} color={COLORS.primary} />
                  <Text style={{ marginLeft: 8 }}>{item.rating}</Text>
                </View>
              </View>
            </Pressable>
          ))
        }
      </View>
    )
  }

  // Render Popular Doctors
  const renderpopularDoctors = () => {
    return (
      <View style={{ marginBottom: 8, marginBottom: 80 }}>
        <Text style={{ ...FONTS.body3, marginBottom: 6 }}>Popular Doctors</Text>
        <FlatList
          horizontal={true}
          data={specialists}
          keyExtractor={item => item.id}
          renderItem=
          {({ item, index }) => (
            <Pressable
            onPress={() => navigation.navigate("DoctorDetails")}
             style={{
              flexDirection: 'column',
              width: 154,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray6,
              paddingVertical: 12,
              borderRadius: 12,
              marginRight: 12
            }}>
              <Image
                source={item.image}
                resizeMode='cover'
                style={{
                  width: 122,
                  height: 84,
                  borderRadius: 15
                }}
              />
              <Text style={{ fontSize: 15, fontFamily: "bold", marginVertical: 4 }}>{item.name}</Text>
              <Text style={{ fontSize: 13, fontFamily: "regular" }}>{item.position}</Text>
            </Pressable>
          )}
        />
      </View>
    )
  }


  // Render Search Modal box
  const renderSearchModal = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [selectedDistance, setselectedDistance] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedStars, setSelectedStars] = useState(Array(5).fill(false));

    const handleStarPress = (index) => {
      const newSelectedStars = selectedStars.map((_, i) => i <= index);
      setSelectedStars(newSelectedStars);
    };

    const handleServiceSelection = (offer) => {
      setSelectedService(offer);
    }

    const handlePriceSelection = (price) => {
      setSelectedPrice(price);
    }

    const handleDistanceSelection = (time) => {
      setselectedDistance(time)
    }
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Pressable
          onPressOut={() => setModalVisible(false)}
          activeOpacity={0.1}
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            height: SIZES.height,
            width: SIZES.width,
          }}
        >
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                height: "auto",
                width: SIZES.width * 0.9,
                borderRadius: 12,
                backgroundColor: COLORS.white,
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 12
                }}>
                <Text style={{ fontSize: 17, fontFamily: "bold" }}>Filter your search</Text>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={commonStyles.header3Icon}
                >
                  <Image
                    source={icons.close}
                    style={{
                      height: 24,
                      width: 24,
                      tintColor: COLORS.black
                    }}
                  />
                </Pressable>
              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "regular", marginBottom: 10 }}>SERVICES</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', marginVertical: 13 }}>
                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Emergency Room" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Emergency Room")}
                  >
                    <Text style={[selectedService === "Emergency Room" && styles.checkboxText]}>Emergency Room</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Surgery" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Surgery")}
                  >
                    <Text style={[selectedService === "Surgery" && styles.checkboxText]}>Surgery</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Laboratory" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Laboratory")}
                  >
                    <Text style={
                      [
                        selectedService === "Laboratory" && styles.checkboxText
                      ]
                    }>Laboratory</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Radiology" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Radiology")}
                  >
                    <Text style={
                      [
                        selectedService === "Radiology" && styles.checkboxText
                      ]
                    }>Radiology</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Pharmacy" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Pharmacy")}
                  >
                    <Text style={
                      [
                        selectedService === "Pharmacy" && styles.checkboxText
                      ]
                    }>Pharmacy</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedService === "Physical Therapy" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleServiceSelection("Physical Therapy")}
                  >
                    <Text style={
                      [
                        selectedService === "Physical Therapy" && styles.checkboxText
                      ]
                    }>Physical Therapy</Text>
                  </Pressable>
                </View>
              </View>


              <View>
                <Text style={{ fontSize: 13, fontFamily: "regular", marginBottom: 2 }}>DISTANCE</Text>

                <View style={{ flexDirection: "row", flexWrap: "wrap", marginVertical: 13 }}>
                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedDistance === "1" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleDistanceSelection("1")}
                  >
                    <Text style={[selectedDistance === "1" && styles.checkboxText]}>Less than 1 Km</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedDistance === "2" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleDistanceSelection("2")}
                  >
                    <Text style={[selectedDistance === "2" && styles.checkboxText]}>2 Km</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.checkboxContainer,
                      selectedDistance === "5" && styles.selectedCheckbox
                    ]}
                    onPress={() => handleDistanceSelection("5")}
                  >
                    <Text style={
                      [
                        selectedDistance === "5" && styles.checkboxText
                      ]
                    }>5 Km</Text>
                  </Pressable>

                </View>

              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "regular", marginBottom: 10 }}>PRICING</Text>
                <View style={{ flexDirection: "row", marginVertical: 13 }}>
                  <Pressable
                    style={[
                      styles.roundedCheckBoxContainer,
                      selectedPrice === "$" && styles.selectedCheckbox
                    ]}
                    onPress={() => handlePriceSelection("$")}
                  >
                    <Text style={[selectedPrice === "$" && styles.checkboxText]}>$</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.roundedCheckBoxContainer,
                      selectedPrice === "$$" && styles.selectedCheckbox
                    ]}
                    onPress={() => handlePriceSelection("$$")}
                  >
                    <Text style={[selectedPrice === "$$" && styles.checkboxText]}>$$</Text>
                  </Pressable>

                  <Pressable
                    style={[
                      styles.roundedCheckBoxContainer,
                      selectedPrice === "$$$" && styles.selectedCheckbox
                    ]}
                    onPress={() => handlePriceSelection("$$$")}
                  >
                    <Text style={
                      [
                        selectedPrice === "$$$" && styles.checkboxText
                      ]
                    }>$$$</Text>
                  </Pressable>


                </View>
              </View>

              <View>
                <Text style={{ fontSize: 13, fontFamily: "regular", marginBottom: 10 }}>RATING</Text>
                <View style={{ flexDirection: 'row', marginVertical: 13 }}>
                 {selectedStars.map((isSelected, index) => (
                    <Pressable
                      key={index}
                      style={styles.starContainer}
                      onPress={() => handleStarPress(index)}
                    >
                      <Ionicons
                        name="star-sharp"
                        size={24}
                        color={isSelected ? COLORS.primary : COLORS.gray}
                      />
                    </Pressable>
                  ))}
                </View>
              </View>

              <Button
                title="FILTER"
                filled
                onPress={() => setModalVisible(false)}
                style={{
                  marginBottom: 12
                }}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <StatusBar hidden={true} />
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: 'center',
          marginTop: 20,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.menuContainer}>
              <Image
                source={icons.menu}
                style={{
                  height: 24,
                  width: 24,
                }}
              />
            </Pressable>
            <View style={{
              flexDirection: 'column',
              marginLeft: 12
            }}>

              <Text style={{
                fontSize: 17,
                fontWeight: 'regular'
              }}>Search</Text>

            </View>
          </View>

          <Pressable
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#EDEDED'
            }}
          >
            <Ionicons name="settings-outline" size={24} color="black" />
          </Pressable>
        </View>
        {renderSearchBar()}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {renderKeywords()}
          {rendersuggestedHospitals()}
          {renderpopularDoctors()}
        </ScrollView>
      </View>
      {renderSearchModal()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 45,
    width: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray
  },
  searchBarContainer: {
    width: SIZES.width - 32,
    height: 62,
    borderRadius: 10,
    backgroundColor: COLORS.tertiaryGray,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16
  },

  checkboxContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLORS.gray6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    marginBottom: 12

  },
  roundedCheckBoxContainer: {
    alignItems: "center",
    justifyContent: 'center',
    height: 48,
    width: 48,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    marginRight: 12
  },
  selectedCheckbox: {
    backgroundColor: COLORS.primary
  },
  checkboxText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "regular"
  },
  starContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.gray6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6
  }
})

export default Search