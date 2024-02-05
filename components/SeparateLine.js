import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'

const SeparateLine = () => {
  return (
    <View style={styles.separateLine} />
  )
}

const styles = StyleSheet.create ({
    separateLine: {
        marginVertical: 7,
        borderBottomWidth: .3,
        borderBottomColor: COLORS.gray4,
        width: "100%"
    }
})

export default SeparateLine
