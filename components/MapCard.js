import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps'
import { icons } from '../constants'

const MapCard = () => {
    return (
        <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 48.8566,
                longitude: 2.3522,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <Marker
                coordinate={{
                    latitude: 48.8566,
                    longitude: 2.3522,
                }}
                image={icons.hospitalLocation}
                title="Move"
                description="Address"
                onPress={() => console.log("Move to another screen")}>
                <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: "regular",
                                    fontWeight: 'bold',
                                    color: "gray",
                                }}>
                                User Address
                            </Text>
                        </View>
                        <View style={styles.arrowBorder} />
                        <View style={styles.arrow} />
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 152,
        zIndex: 1
    },
    // Callout bubble
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 'auto',
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },
})

export default MapCard