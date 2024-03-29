import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { getTimeAgo } from '../utils/date'

const NotificationCard = ({ avatar, name, message, time }) => {
    return (
        <Pressable style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={avatar}
                    style={styles.avatar}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'column', width: (SIZES.width - 32 - 64) }}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.message}>{message}</Text>
                    </View>
                    <Text style={styles.time}>{getTimeAgo(time)}</Text>
                </View>
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        width: SIZES.width - 32
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 27,
        marginRight: 16
    },
    name: {
        fontSize: 13,
        fontFamily: "bold",
        color: COLORS.black,
    },
    message: {
        fontSize: 13,
        fontFamily: "regular",
        color: COLORS.black,
        marginLeft: 2,
        flexWrap: 'wrap'
    },
    time: {
        fontSize: 10,
        fontFamily: "regular",
        color: COLORS.black,
        marginVertical: 16
    },
    image: {
        height: 54,
        width: 54,
        borderRadius: 10,
        borderColor: COLORS.gray,
        borderWidth: 1
    }
})
export default NotificationCard