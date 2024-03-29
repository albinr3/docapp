import {
    Text,
    Pressable,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary
    const outlinedBgColor = COLORS.white
    const bgColor = props.filled ? filledBgColor : outlinedBgColor
    const textColor = props.filled
        ? COLORS.white || props.textColor
        : props.textColor || COLORS.primary
    const isLoading = props.isLoading || false

    return (
        <Pressable
            style={{
                ...styles.btn,
                ...{ backgroundColor: bgColor },
                ...props.style,
            }}
            onPress={props.onPress}
        >
            {isLoading && isLoading == true ? (
                <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
                <Text style={{ ...FONTS.h4, ...{ color: textColor } }}>
                    {props.title}
                </Text>
            )}
        </Pressable>
    )
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Button