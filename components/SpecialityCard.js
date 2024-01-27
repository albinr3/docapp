import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const SpecialityCard = ({ icon, name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.specialityIconContainer}>
         <Image
           source={icon}
           resizeMode='contain'
           style={styles.specialityIcon}
         />
      </TouchableOpacity>
      <Text style={styles.specialityText}>{name.slice(0, 5)}...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10 ,
        alignItems: "center",
        flexDirection: "column",
        marginBottom: 12
    },
    specialityIconContainer: {
        height: 64,
        width: 64,
        backgroundColor: "rgba(25, 142, 182, .10)",
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center"
    },
    specialityIcon: {
        height: 36,
        width: 36,
        tintColor: COLORS.primary
    },
    specialityText: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black,
        marginTop: 8
    }
})
export default SpecialityCard