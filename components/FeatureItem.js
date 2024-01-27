import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const FeatureItem = ({ icon, name, onPress, description }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <TouchableOpacity style={styles.categoryIconContainer}>
         <Image
           source={icon}
           resizeMode='contain'
           style={styles.categoryIcon}
         />
      </TouchableOpacity>
      <Text style={styles.categoryText}>{name}</Text>
      <Text style={styles.categoryExperience}>{description}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 4,
        alignItems: "center",
        flexDirection: "column",
    },
    categoryIconContainer: {
        height: 52,
        width: 52,
        backgroundColor: COLORS.transparentPrimary,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center"
    },
    categoryIcon: {
        height: 26,
        width: 26,
        tintColor: COLORS.primary
    },
    categoryText: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.primary,
        marginTop: 8
    },
    description: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray",
        marginTop: 8
    }
})

export default FeatureItem