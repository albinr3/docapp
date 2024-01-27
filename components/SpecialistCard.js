import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import { MaterialIcons, Ionicons } from "@expo/vector-icons"
import ReviewStars from './ReviewStars'
import { useNavigation } from '@react-navigation/native'

const SpecialistCard = ({ image, type, name, position, rating, numReviews }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation();


    return (
        <TouchableOpacity 
        onPress={() =>navigation.navigate("DoctorDetails")}
        style={styles.container}>
            <TouchableOpacity
                onPress={() => setIsFavourite(!isFavourite)}
                style={styles.likeContainer}
            >
                <Ionicons
                    name={isFavourite ? "heart-sharp" : "heart-outline"}
                    size={24}
                    color={isFavourite ? COLORS.red : "gray"}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Image
                    source={image}
                    resizeMode='contain'
                    style={styles.avatar}
                />
                <View style={{
                    marginLeft: 8
                }}>
                    <View style={styles.topContainer}>
                        <View style={styles.verifiedContainer}>
                            <MaterialIcons name="verified" size={16} color={COLORS.primary} />
                            <Text style={styles.verifiedText}>{type}</Text>
                        </View>

                    </View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontFamily: "regular",
                        color: "gray"
                    }}>{position}</Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <ReviewStars review={rating} />
                        <Text style={{ fontFamily: "medium", marginLeft: 3 }}>{rating}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: "regular",
                            color: "gray"
                        }}>   |  {numReviews} reviews</Text>
                    </View>

                </View>
            </View>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>Make Appointment</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        width: "100%",
        marginBottom: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingHorizontal: 8,
        paddingVertical: 8,
        shadowColor: "#000",
        borderRadius: 12,
        paddingHorizontal: 12,
        marginRight: 12,
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 4,
        padding: 16,
        backgroundColor: COLORS.white
    },
    btnContainer: {
        height: 48,
        width: "100%",
        borderRadius: 8,
        backgroundColor: "rgba(25, 142, 182, .2)",
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.primary
    },
    avatar: {
        height: 112,
        width: 112,
        borderRadius: 12
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    verifiedContainer: {
        height: 28,
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "rgba(25, 142, 182, .2)",
        flexDirection: "row",
        borderRadius: 6
    },
    verifiedText: {
        fontSize: 10,
        color: COLORS.primary,
        fontFamily: "medium",
        marginLeft: 2
    },
    likeContainer: {
        position: "absolute",
        top: 10,
        right: 10
    },
    name: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black
    }
})

export default SpecialistCard