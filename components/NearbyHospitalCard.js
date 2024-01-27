import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../constants'
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons"

const NearbyHospitalCard = ({ image, rating, name, distance, time, specialties, address, reviews }) => {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <TouchableOpacity style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsLiked(!isLiked)}
                style={styles.likeContainer}>
                <Ionicons name={isLiked ? "heart-sharp" : "heart-outline"} size={24} color={COLORS.red} />
            </TouchableOpacity>
            <View style={styles.reviewContainer}>
                <FontAwesome name="star" size={20} color="orange" />
                <Text style={styles.ratingNum}>{rating}</Text>
                <Text style={styles.reviews}>({reviews} reviews)</Text>
            </View>
            <Image
                source={image}
                resizeMode='cover'
                style={styles.image}
            />
            <View style={{
                paddingHorizontal: 4
            }}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{specialties.join(', ')}</Text>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 6
                }}>
                    <Ionicons name="location-sharp" size={16} color={COLORS.primary} />
                    <Text style={styles.subtitle}>{address}</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <AntDesign name="clockcircle" size={16} color={COLORS.primary} />
                    <Text style={styles.subtitle}>{time} - {distance}Km</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 12,
        height: 260,
        width: SIZES.width - 24,
        borderRadius: 12,
        flexDirection: "column",
        borderColor: COLORS.gray,
        borderWidth: 1,
        marginRight: 16,
        marginBottom: 12,
        paddingBottom: 12
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
        marginVertical: 6,
    },
    subtitle: {
        fontSize: 14,
        fontFamily: "regular",
        color: "gray",
        marginLeft: 4
    },
    reviewContainer: {
        flexDirection: "row",
        width: 154,
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
    },
    reviews: {
        fontSize: 14,
        fontFamily: "regular",
        color: "gray"
    }
})

export default NearbyHospitalCard