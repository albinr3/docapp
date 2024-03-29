import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons } from "../constants"
import { specialities } from '../data/utils'
import SpecialityCard from '../components/SpecialityCard'
import { ScrollView } from 'react-native-virtualized-view'

const Category = ({ navigation }) => {
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
        }}>Category</Text>
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
   * Render All doctor Category
   */

  const renderAllCategories = () => {
    return (
      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 12
      }}>
        {
          specialities.map((item, index) => (
            <SpecialityCard
              key={item.id}
              icon={item.icon}
              name={item.name}
            />
          ))
        }
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderAllCategories()}
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

export default Category