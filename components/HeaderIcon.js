import { StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const HeaderIcon = ({ icon, onPress }) => {
  return (
    <Pressable 
    onPress={onPress}
    style={styles.container}>
        <Image
          source={icon}
          resizeMode='contain'
          style={styles.icon}
        />
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        backgroundColor: COLORS.white,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.gray,
        borderWidth: 1
    },
    icon: {
        height: 24,
        width: 24,
        tintColor: COLORS.black
    }
})

export default HeaderIcon