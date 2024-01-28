import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const PaymentMethodItem = ({ checked, onPress, title, icon }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
       <View style={styles.rightContainer}>
                <Image
                  source={icon}
                  resizeMode='contain'
                  style={styles.icon}
                />
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>     
       </View>
       <View style={styles.leftContainer}>
            <Pressable style={{marginLeft: 8}} onPress={onPress}>
                <View
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor:  COLORS.primary ,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                }}
                >
                {checked && <View style={{
                    height: 10, 
                    width: 10, 
                    backgroundColor: COLORS.primary,
                    borderRadius: 999
                    }}/> }
                </View>
            </Pressable>

       </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: .4,
        borderColor: COLORS.gray5,
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 12
    },
    rightContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        height: 26,
        width: 26,
        marginRight: 16
    },
    title: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.black
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})

export default PaymentMethodItem