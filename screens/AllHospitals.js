import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from '../constants'
import { hospitalKeywordsData } from '../data/utils'
import NearbyHospitalCard from '../components/NearbyHospitalCard'
import { markers } from '../data/mapData'
import { ScrollView } from 'react-native-virtualized-view'

const AllHospitals = ({ navigation }) => {
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
        }}>Nearby Hospitals</Text>
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

  /**
 * Render Filter Keywords
 */

  const renderFilterKeywords = () => {
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const handleKeywordPress = (id) => {
      setSelectedKeywords((prevSelectedKeywords) => {
        if (prevSelectedKeywords.includes(id)) {
          // Remove keyword from the selection if already selected
          return prevSelectedKeywords.filter((keywordId) => keywordId !== id);
        } else {
          // Add keyword to the selection if not already selected
          return [...prevSelectedKeywords, id];
        }
      });
    };

    const KeywordItem = ({ item, onPress, selected }) => {
      const itemStyle = {
        ...{
          padding: 10,
          marginHorizontal: 5,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
        backgroundColor: selected ? COLORS.primary : COLORS.tertiary, // Change color based on selection
        borderColor: COLORS.primary,
        borderWidth: 1
      };

      return (
        <TouchableOpacity style={itemStyle} onPress={() => onPress(item.id)}>
          <Text style={{ color: selected ? COLORS.white : COLORS.primary }}>{item.keyword}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ paddingTop: 4, paddingBottom: 16 }}>
        <FlatList
          data={hospitalKeywordsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <KeywordItem
              item={item}
              onPress={handleKeywordPress}
              selected={selectedKeywords.includes(item.id)}
            />
          )}
        />
      </View>
    )
  }

  /**
   * Render Content
   */
  const renderContent = () => {
    return (
      <View>
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
    )
  }

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        {renderFilterKeywords()}
        <ScrollView
          showsVerticalScrollIndicator={false}>
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
})

export default AllHospitals