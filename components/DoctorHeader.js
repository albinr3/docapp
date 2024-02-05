import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { COLORS, icons, images, SIZES } from '../constants'


const DoctorHeader = () => {
    return (
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
    )
}

const styles = StyleSheet.create({
    doctorInfoContainer: {
        flexDirection: "row",
        marginVertical: 6,
        alignItems: "center"
    },
    avatar: {
        height: 94,
        width: 94,
        borderRadius: 999
    },
    verified: {
        position: "absolute",
        top: 50,
        right: -6,
        zIndex: 999
    },
    doctorName: {
        fontSize: 18,
        fontFamily: "medium",
        color: COLORS.black
    },
    doctorPosition: {
        fontSize: 16,
        fontFamily: "regular",
        color: "gray"
    },
    locationContainer: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center"
    },
})

export default DoctorHeader;