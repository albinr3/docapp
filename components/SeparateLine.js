import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'

const SeparateLine = ({thin}) => {
  return (
    <View style={thin ? styles.separateLine2 : styles.separateLine} />
  )
}

const styles = StyleSheet.create ({
    separateLine: {
        marginVertical: 7,
        borderBottomWidth: .3,
        borderBottomColor: COLORS.gray4,
        width: "100%"
    },
    separateLine2: {
      marginTop: 10,
      borderBottomWidth: .3,
      borderBottomColor: COLORS.gray6,
      width: "100%"
  }
})

export default SeparateLine
