import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const AvailableDoctorTime = () => {
  return (
    <>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Monday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Tuesday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Wednesday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Thursday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Friday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Saturday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Sunday</Text>
            <Text style={styles.time}>09:00 - 14:00</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    hourContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    day: {
        fontSize: 16,
        fontFamily: "regular",
        color: "gray",
        marginBottom: 6
    },
    time: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.black
    },
})


export default AvailableDoctorTime