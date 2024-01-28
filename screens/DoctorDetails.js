import { View, Text, StyleSheet, Pressable, Image, FlatList} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons, images, SIZES } from '../constants'
import HeaderIcon from '../components/HeaderIcon'
import FeatureItem from '../components/FeatureItem'
import AvailableDoctorTime from '../components/AvailableDoctorTime'
import { ScrollView } from 'react-native-virtualized-view'
import MapCard from '../components/MapCard'
import { hospitalReviews } from '../data/utils'
import ReviewCard from '../components/ReviewCard'

const DoctorDetails = ({ navigation }) => {
    /***
     * Render Header
     */
    const renderHeader = () => {
        const [isFavourite, setIsFavourite] = useState(false)
        return (
            <View style={styles.headerIconContainer}>
                <HeaderIcon
                    icon={icons.back}
                    onPress={() => navigation.goBack()}
                />
                <Text style={styles.doctorDetails}>Doctor Details</Text>
                <View style={{ flexDirection: "row" }}>
                    <HeaderIcon
                        icon={icons.share}
                        onPress={() => console.log("Share")}
                    />
                    <Pressable
                        onPress={() => setIsFavourite(!isFavourite)}
                        style={styles.heartIconContainer}>
                        <Image
                            source={isFavourite ? icons.heart : icons.heartOutline}
                            resizeMode='contain'
                            style={{
                                height: 24,
                                width: 24,
                                tintColor: isFavourite ? COLORS.red : COLORS.black
                            }}
                        />
                    </Pressable>
                </View>
            </View>
        )
    }

    /***
     * Render content
     */

    const renderContent = () => {
        const [showFullDescription, setShowFullDescription] = useState(false);
        const description = "Dr. Wilson is a highly experienced medical practitioner, specializing in internal medicine. With years of dedicated service, Dr. Smith has earned a reputation for providing compassionate and expert care to patients in the bustling city of New York. Although not the only medical professional in the area, Dr. Smith is widely recognized for their exceptional skills and commitment to improving the health and well-being of their patients...";
        const toggleDescription = () => {
            setShowFullDescription(!showFullDescription);
        };
        return (
            <View>
                <View style={styles.doctorInfoContainer}>
                    <View>
                        <Pressable>
                            <Image
                                source={images.doctor1}
                                resizeMode='contain'
                                style={styles.avatar}
                            />
                            <View style={styles.verified}>
                                <Image
                                    source={icons.verified}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24
                                    }}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <View style={{
                        marginLeft: 16
                    }}>
                        <Text style={styles.doctorName}>Dr. Jonny Wilson</Text>
                        <Text style={styles.doctorPosition}>Dentist</Text>
                        <View style={styles.locationContainer}>
                            <Image
                                source={icons.maps}
                                resizeMode='contain'
                                style={{
                                    height: 16,
                                    width: 16,
                                    tintColor: COLORS.primary
                                }}
                            />
                            <Text style={[styles.doctorPosition, { marginHorizontal: 4 }]}>New York, United States</Text>
                            <Image
                                source={icons.direction}
                                resizeMode='contain'
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.primary
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.separateLine} />
                <View style={styles.featureContainer}>
                    <FeatureItem
                        icon={icons.patients}
                        name="7,500+"
                        description="Patients"
                    />
                    <FeatureItem
                        icon={icons.work}
                        name="10+"
                        description="Years Exp."
                    />
                    <FeatureItem
                        icon={icons.star2}
                        name="4.9+"
                        description="Rating"
                        onPress={() => navigation.navigate("AddDoctorReview")}
                    />
                    <FeatureItem
                        icon={icons.message}
                        name="4,956"
                        description="Reviews"
                    />
                </View>
                <Text style={styles.h4}>About</Text>
                <View style={styles.separateLine2} />
                <Text style={styles.description}>
                    {showFullDescription ? description : `${description.slice(0, 100)}...`}
                </Text>
                {description.length > 100 && (
                    <Pressable onPress={toggleDescription}>
                        <Text style={styles.descriptionBtn}>
                            {showFullDescription ? 'Read Less' : 'Read More'}
                        </Text>
                    </Pressable>
                )}
                <Text style={styles.h4}>Working Hours</Text>
                <View style={styles.separateLine2} />
                <AvailableDoctorTime />
                <Text style={styles.h4}>Address</Text>
                <View style={styles.separateLine2} />
                <View style={styles.subIconContainer}>
                    <Image
                        source={icons.maps}
                        resizeMode='contain'
                        style={styles.subIcon}
                    />
                    <Text style={styles.subname}>8502 Preston Rd. Inglewood, Maine 98380</Text>
                </View>
                <MapCard />
                <Text style={styles.h4}>Reviews</Text>
                <View style={styles.separateLine2} />
                <FlatList
                    data={hospitalReviews.slice(0, 3)} // Render only the first 3 items
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <ReviewCard
                            image={item.image}
                            date={item.date}
                            title={item.title}
                            num={item.num}
                            description={item.description}
                        />
                    )}
                />

            </View>
        )
    }

    /**
    * Render Appointment buttons
    */
    const renderAppointmentButton = () => {
        return (
            <View style={styles.btnContainer}>
                <Pressable
                    onPress={() => navigation.navigate("BookAppointmemt")}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Book Appointment</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.container}>
                {renderHeader()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {renderContent()}
                </ScrollView>
            </View>
            {renderAppointmentButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 140
    },
    headerIconContainer: {
        width: SIZES.width - 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        alignItems: "center"
    },
    heartIconContainer: {
        height: 48,
        width: 48,
        backgroundColor: COLORS.white,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 6,
        borderColor: COLORS.gray,
        borderWidth: 1
    },
    doctorDetails: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black
    },
    doctorInfoContainer: {
        flexDirection: "row",
        marginVertical: 6,
        alignItems: "center"
    },
    avatar: {
        height: 84,
        width: 84,
        borderRadius: 999
    },
    verified: {
        position: "absolute",
        top: 50,
        right: -6,
        zIndex: 999
    },
    doctorName: {
        fontSize: 14,
        fontFamily: "medium",
        color: COLORS.black
    },
    doctorPosition: {
        fontSize: 14,
        fontFamily: "regular",
        color: "gray"
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    separateLine: {
        marginVertical: 8,
        borderBottomWidth: .3,
        borderBottomColor: COLORS.gray4,
        width: "100%"
    },
    separateLine2: {
        borderBottomWidth: .3,
        borderBottomColor: COLORS.gray4,
        width: "100%",
        marginBottom: 6
    },
    featureContainer: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    h4: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.black,
        marginVertical: 6
    },
    description: {
        fontSize: 12,
        color: "gray",
        fontFamily: "regular"
    },
    descriptionBtn: {
        color: COLORS.primary,
        fontSize: 14,
        fontFamily: "medium"
    },
    subname: {
        fontSize: 14,
        fontFamily: "regular",
        color: "gray"
    },
    subIcon: {
        height: 14,
        width: 14,
        tintColor: COLORS.primary,
        marginRight: 4
    },
    subIconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    btnContainer: {
        position: "absolute",
        bottom: 16,
        height: 72,
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: COLORS.white,
        alignItems: "center"
    },
    btn: {
        height: 48,
        width: SIZES.width - 32,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    btnText: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.white
    }
})

export default DoctorDetails