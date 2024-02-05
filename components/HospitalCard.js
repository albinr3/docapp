import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const HospitalCard = ({ image, rating, name, distance, time }) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("HospitalDetails")}
            style={styles.container}>
            <Pressable
                onPress={() => setIsLiked(!isLiked)}
                style={styles.likeContainer}>
                <Ionicons name={isLiked ? "heart-sharp" : "heart-outline"} size={24} color={COLORS.red} />
            </Pressable>
            <View style={styles.reviewContainer}>
                <FontAwesome name="star" size={20} color="orange" />
                <Text style={styles.ratingNum}>{rating}</Text>
            </View>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.image}
            />
            <View style={{ marginTop: 4, paddingHorizontal: 6,  }}>
                <Text style={styles.title}>{name}</Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 4
                }}>
                    <AntDesign name="clockcircle" size={16} color={COLORS.primary} />
                    <Text style={styles.subtitle}>{time} - {distance}Km</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 12,
        height: 224,
        width: 240,
        borderRadius: 12,
        flexDirection: "column",
        borderColor: COLORS.gray,
        borderWidth: 1,
        marginRight: 16
    },
    image: {
        width: "100%",
        height: 160,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    title: {
        fontSize: 14,
        fontFamily: "bold",
        color: COLORS.black,
        marginTop: 6
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "regular",
        color: "gray",
        marginLeft: 4
    },
    reviewContainer: {
        flexDirection: "row",
        width: 63,
        height: 28,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 120,
        zIndex: 999,
        right: 10
    },
    ratingNum: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.black,
        marginLeft: 4
    },
    likeContainer: {
        height: 36,
        width: 36,
        borderRadius: 999,
        backgroundColor: "rgba(255,255,255,.4)",
        zIndex: 999,
        position: "absolute",
        top: 10,
        right: 10,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HospitalCard