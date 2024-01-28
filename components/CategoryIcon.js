import { Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const CategoryIcon = ({ icon, name, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Pressable style={styles.categoryIconContainer}>
         <Image
           source={icon}
           resizeMode='contain'
           style={styles.categoryIcon}
         />
      </Pressable>
      <Text style={styles.categoryText}>{name}</Text>
    </Pressable>
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
        color: COLORS.black,
        marginTop: 8
    }
})

export default CategoryIcon