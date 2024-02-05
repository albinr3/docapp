import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../constants'
import { AntDesign } from "@expo/vector-icons"

const ScheduleCard = ({ doctorName, doctorAvatar, type, date, starHour, endHour }) => {
    return (
        <View style={styles.container}>
            <View style={styles.doctorInfoContainer}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image
                        source={doctorAvatar}
                        resizeMode='contain'
                        style={styles.avatar}
                    />
                    <View style={{
                        marginLeft: 12
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: "medium",
                            color: COLORS.white
                        }}>{doctorName}</Text>
                        <Text style={{
                            fontSize: 15,
                            fontFamily: "regular",
                            color: COLORS.white
                        }}>{type}</Text>
                    </View>
                </View>
                <Pressable style={styles.callContainer}>
                    <Image
                        source={icons.phone}
                        resizeMode='contain'
                        style={styles.phoneIcon}
                    />
                </Pressable>
            </View>
            <View style={styles.scheduleContainer}>
                <View style={styles.dateContainer}>
                    <Image
                        source={icons.calendarOutline}
                        resizeMode='contain'
                        style={styles.calendarIcon}
                    />
                    <Text style={styles.calendarText}>{date}</Text>
                </View>
                <View style={styles.hoursContainer}>
                    <AntDesign name="clockcircleo" size={20} color={COLORS.white} />
                    <Text style={styles.hoursText}>{starHour} - {endHour}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width - 24,
        height: 132,
        borderRadius: 8,
        backgroundColor: COLORS.primary,
        padding: 14,
        marginRight: 12,
        marginTop: 4,
        marginBottom: 6
    },
    doctorInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 999
    },
    callContainer: {
        height: 48,
        width: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        backgroundColor: COLORS.white
    },
    phoneIcon: {
        height: 24,
        width: 24,
        tintColor: COLORS.primary
    },
    scheduleContainer: {
        height: 48,
        backgroundColor: "rgba(0,0,0,.1)",
        width: "100%",
        borderRadius: 8,
        marginTop: 16,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    dateContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: COLORS.white,
        width: (SIZES.width - 30) / 2
    },
    hoursContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    calendarIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.white,
        marginRight: 6
    },
    calendarText: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.white
    },
    hoursText: {
        fontSize: 12,
        fontFamily: "regular",
        color: COLORS.white,
        marginLeft: 6
    }
})

export default ScheduleCard