import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { markers, mapDarkStyle, mapStandardStyle } from '../data/mapData';
import StarRating2 from '../components/StarRating2';

import { useTheme } from '@react-navigation/native';
import { COLORS, icons } from '../constants';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 160;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const Explore = () => {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [
      {
        name: 'General Hospitals',
        icon: <Image source={icons.hospital1} style={styles.categoryIcon} />,
      },
      {
        name: 'Pediatric Hospitals',
        icon: <Image source={icons.hospital2} style={styles.categoryIcon} />,
      },
      {
        name: 'Medical Centers',
        icon: <Image source={icons.hospital4} style={styles.categoryIcon} />,
      },
      {
        name: 'Specialty Clinics',
        icon: <Image source={icons.hospital5} style={styles.categoryIcon} />,
      },
      {
        name: 'Urgent Care',
        icon: <Image source={icons.hospital6} style={styles.categoryIcon} />,
      },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinate } = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20);
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
      >
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../assets/icons/hospital-location.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search doctor, hospital..."
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{ flex: 1, padding: 0 }}
        />
        <Ionicons name="search" size={20} />
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top: 0,
          left: 0,
          bottom: 0,
          right: 20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentContainerStyle={{
          paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>{marker.name}</Text>
              <StarRating2 ratings={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
              <View style={styles.typeContainer}>
                <Image
                  source={icons.categories}
                  resizeMode='contain'
                  style={{
                    height: 16,
                    width: 16
                  }}
                />
                <Text style={styles.type}>{marker.type}</Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => { }}
                  style={[styles.signIn, {
                    borderColor: COLORS.primary,
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: COLORS.primary
                  }]}>View More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    marginBottom: 60,
    flexDirection: "row",
    borderRadius: 25
  },
  cardImage: {
    flex: 2,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 15
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    fontFamily: "bold",
    marginBottom: 7,
    color: COLORS.black
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
    marginTop: 12
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  categoryIcon: {
    height: 18,
    width: 18,
    tintColor: COLORS.black,
    marginRight: 8
  },
  typeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6
  },
  type: {
    fontSize: 12,
    fontFamily: "bold",
    color: COLORS.primary,
    marginLeft: 12
  }
});

export default Explore;