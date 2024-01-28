import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, illustrations } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar';
import { useVariables } from '../navigations/Context';

const LocationAccess = ({ navigation }) => {
    const { gps, setGps } = useVariables();
    const arrayGPS = [];
    const [errorMsg, setErrorMsg] = useState(null);
    const [textAddress, setTextAddress] = useState(null)

    // Get user location
    useEffect(() => {
        const getPermissions = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})
            const text = JSON.stringify(location)
            const parsedData = JSON.parse(text)
            const longitude = parsedData.coords.longitude
            const latitude = parsedData.coords.latitude
            setGps({longitude: longitude, latitude: latitude})
            

            let textAddress = await Location.reverseGeocodeAsync({
                latitude: latitude,
                longitude: longitude,
            })
            setTextAddress(
                `${textAddress[0].name}, ${textAddress[0].district}, ${textAddress[0].city}`
            )
            
        }

        getPermissions()
     
    }, [])

    return (
        <SafeAreaView style={styles.area}>
            <StatusBar hidden={false} barStyle='dark-content' backgroundColor={COLORS.white}/>
            <View style={styles.center}>
                <Image
                    source={illustrations.mapDark}
                    resizeMode='contain'
                    style={styles.locationImage} />
                <Pressable
                    onPress={() => navigation.navigate("Main")}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Access Location</Text>
                    <View style={styles.iconContainer}>
                        <Ionicons name="location-outline" size={20} color={COLORS.white} />
                    </View>
                </Pressable>
                <Text style={styles.bottomText}>HelpDoc WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 22
    },
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding2,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: SIZES.padding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: SIZES.width - 44,
        marginTop: SIZES.padding2 * 4,
        marginBottom: SIZES.padding2 * 2,
        backgroundColor: COLORS.primary
    },
    locationImage: {
        height: SIZES.width * 0.8,
        width: SIZES.width * 0.8
    },
    btnText: {
        ...FONTS.body3,
        textTransform: 'uppercase',
        color: COLORS.white
    },
    iconContainer: {
        marginLeft: SIZES.padding3,
        height: 32,
        width: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    bottomText: {
        ...FONTS.body4,
        textTransform: 'uppercase',
        marginVertical: SIZES.padding * 2,
        textAlign: 'center'
    }
})
export default LocationAccess