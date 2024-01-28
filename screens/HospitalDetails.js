import { View, Text, StyleSheet, ImageBackground, Pressable, Image, useWindowDimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images } from '../constants'
import HeaderIcon from '../components/HeaderIcon'
import { FontAwesome } from "@expo/vector-icons"
import CategoryIcon from '../components/CategoryIcon'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { ScrollView } from 'react-native-virtualized-view'
import { gallery, hospitalReviews, specialists } from '../data/utils'
import SpecialistCard from '../components/SpecialistCard'
import ReviewCard from '../components/ReviewCard'
import MapCard from '../components/MapCard'

const AboutRoute = () => (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white, padding: 12 }}>
        <Text style={styles.h4}>About</Text>
        <Text style={styles.description}>Serenity Wellness Hospital is a tranquil oasis of healing nestled amidst lush greenery.From serene meditation gardens to soothing treatment rooms,
            every corner of our hospital is thoughtfully crafted to foster serenity and
            support your path to wellness</Text>
        <Text style={styles.h4}>Working Hours</Text>
        <View style={styles.separateLine2} />
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Monday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Tuesday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Wednesday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Thursday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Friday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Saturday</Text>
            <Text style={styles.time}>09:00 - 22:00</Text>
        </View>
        <View style={styles.hourContainer}>
            <Text style={styles.day}>Sunday</Text>
            <Text style={styles.time}>09:00 - 14:00</Text>
        </View>
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
        {/* Render maps */}
        <MapCard />
    </ScrollView>
)
const SpecialistRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flexDirection: "row", marginLeft: 8 }}>
            <Text style={styles.h4}>About</Text>
            <Text style={[styles.h4, { color: COLORS.primary, marginLeft: 4 }]}>({specialists.length})</Text>
        </View>
        <FlatList
            data={specialists}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                <SpecialistCard
                    image={item.image}
                    type={item.type}
                    name={item.name}
                    position={item.position}
                    rating={item.rating}
                    numReviews={item.numReviews}
                />
            )}
        />
    </View>
)

const GalleryRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ flexDirection: "row", marginLeft: 8 }}>
            <Text style={styles.h4}>Gallery</Text>
            <Text style={[styles.h4, { color: COLORS.primary, marginLeft: 4 }]}>({gallery.length})</Text>
        </View>
        <FlatList
            data={gallery}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        flex: 1,
                        aspectRatio: 1,
                        margin: 3,
                    }}
                >
                    <Image
                        key={index}
                        source={item.image}
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 12,
                        }}
                    />
                </View>
            )}
        />
    </View>
)

const reviewRoute = () => (
    <View style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 12 }}>
        <View style={{ flexDirection: "row", marginLeft: 8 }}>
            <Text style={styles.h4}>Reviews</Text>
            <Text style={[styles.h4, { color: COLORS.primary, marginLeft: 4 }]}>({hospitalReviews.length})</Text>
        </View>
        <FlatList
            data={hospitalReviews}
            showsVerticalScrollIndicator={false}
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

const renderScene = SceneMap({
    first: AboutRoute,
    second: SpecialistRoute,
    third: GalleryRoute,
    fourth: reviewRoute
});

const HospitalDetails = ({ navigation }) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'About' },
        { key: 'second', title: 'Specialists' },
        { key: 'third', title: 'Gallery' },
        { key: 'fourth', title: 'Reviews' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{
                backgroundColor: COLORS.primary
            }}
            style={{
                backgroundColor: '#fff',
            }}
            renderLabel={({ route, focused, color }) => (
                <Text style={[{ color: focused ? COLORS.black : 'gray' }]}>
                    {route.title}
                </Text>
            )}
        />
    );
    /***
     * Render header
     */

    const renderHeader = () => {
        const [isFavourite, setIsFavourite] = useState(false)
        return (
            <ImageBackground source={images.hospital5} style={styles.headerContainer}>
                <View style={styles.headerIconContainer}>
                    <HeaderIcon
                        icon={icons.back}
                        onPress={() => navigation.goBack()}
                    />

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
            </ImageBackground>
        )
    }

    /**
     * Render content
     */

    const renderContent = () => {
        return (
            <View style={styles.contentContainer}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Pressable
                        onPress={() => navigation.navigate("AddHospitalReview")}
                        style={{
                            alignItems: "center",
                            width: "100%",
                            top: -16
                        }}>
                        <View style={styles.ratingContainer}>
                            <FontAwesome name="star" size={16} color={COLORS.white} />
                            <Text style={styles.rating}>4.8 (1k+ reviews) </Text>
                        </View>
                    </Pressable>
                    <View>
                        <Text style={styles.name}>Senerity Wellness Clinic</Text>
                        <Text style={styles.subname}>Dental, Skin Care, Eye Care</Text>
                    </View>
                    <View style={styles.separateLine} />
                    <View style={styles.subIconContainer}>
                        <Image
                            source={icons.maps}
                            resizeMode='contain'
                            style={styles.subIcon}
                        />
                        <Text style={styles.subname}>8502 Preston Rd. Inglewood, Maine 98380</Text>
                    </View>
                    <View style={styles.subIconContainer}>
                        <Image
                            source={icons.time}
                            resizeMode='contain'
                            style={styles.subIcon}
                        />
                        <Text style={styles.subname}>15 min . 1Km . Mon Sun, 11am - 11pm</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 12,
                        justifyContent: "space-between"
                    }}>
                        <CategoryIcon icon={icons.website} name="Website" />
                        <CategoryIcon icon={icons.message} name="Message" />
                        <CategoryIcon icon={icons.call} name="Call" />
                        <CategoryIcon icon={icons.direction} name="Direction" />
                        <CategoryIcon icon={icons.send} name="Share" />
                    </View>

                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}
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
                  onPress={()=>navigation.navigate("BookAppointmemt")}
                  style={styles.btn}>
                    <Text style={styles.btnText}>Book Appointment</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.area}>
            <View style={styles.container}>
                {renderHeader()}
                {renderContent()}
                {renderAppointmentButton()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        height: 140
    },
    headerIconContainer: {
        marginHorizontal: 16,
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16
    },
    heartIconContainer: {
        height: 48,
        width: 48,
        backgroundColor: COLORS.white,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 6
    },
    contentContainer: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        top: -40,
        flex: 1
    },
    ratingContainer: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        width: 132
    },
    rating: {
        fontSize: 12,
        color: COLORS.white,
        fontFamily: "regular",
        marginLeft: 6
    },
    name: {
        fontSize: 16,
        fontFamily: "medium",
        color: COLORS.black
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
    hourContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    },
    day: {
        fontSize: 12,
        fontFamily: "regular",
        color: "gray"
    },
    time: {
        fontSize: 12,
        fontFamily: "medium",
        color: COLORS.black
    },
    btnContainer: {
        position: "absolute",
        bottom: 22,
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

export default HospitalDetails