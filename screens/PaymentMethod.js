import { View, Text, Pressable, Image, StyleSheet, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { commonStyles } from '../styles/commonStyles'
import { Feather } from "@expo/vector-icons"
import Button from '../components/Button'

const PaymentCard = ({ cardImage, isSelected, onSelect, cardName }) => {
  const cardStyle = isSelected ? styles.selectedCard : styles.card;

  return (
    <View style={styles.cardContainer}>
      <Pressable onPress={onSelect} style={cardStyle}>
        <Image source={cardImage} style={styles.cardImage} />

      </Pressable>
      <Text style={styles.cardText}>{cardName}</Text>
    </View>

  );
};


const PaymentMethod = ({ navigation }) => {
  const renderHeader = () => {
    const navigation = useNavigation()
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={commonStyles.header1Icon}
        >
          <Image
            resizeMode='contain'
            source={icons.arrowLeft}
            style={{ height: 24, width: 24, tintColor: COLORS.black }}
          />
        </Pressable>
        <Text style={{ marginLeft: 12, fontSize: 17, fontFamily: "regular" }}>Payment Method</Text>
      </View>
    )
  }

  const renderAvailablePayments = () => {
    const [selectedCard, setSelectedCard] = useState('');
    const navigation = useNavigation();

    const data = [
      { id: '1', cardImage: images.cash, cardName: "Cash" },
      { id: '2', cardImage: images.visa, cardName: "Visa" },
      { id: '3', cardImage: images.mastercard, cardName: "MasterCard" },
      { id: '4', cardImage: images.paypal, cardName: "PayPal" }
    ];

    const renderItem = ({ item }) => (
      <PaymentCard
        cardImage={item.cardImage}
        cardName={item.cardName}
        isSelected={selectedCard === item.id}
        onSelect={() => setSelectedCard(item.id)}
      />
    );

    return (
      <View style={{ marginVertical: 22 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
        />
        <Pressable
          onPress={() => console.log("Pressed")}
          style={{
            width: SIZES.width - 32,
            borderRadius: 10,
            backgroundColor: COLORS.gray,
            height: 82,
            marginVertical: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10
          }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{ ...FONTS.h4, marginBottom: 10 }}>Mastercard</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image
                source={images.mastercard}
                style={{
                  width: 28,
                  height: 16
                }}
              />
              <Text style={{ fontSize: 12, fontFamily: "regular" }}>*****************436</Text>
            </View>
          </View>
          <View>
            <Image
              source={icons.arrowDown}
              style={{
                height: 12,
                width: 12,
                tintColor: COLORS.black
              }}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("AddNewPaymentMethod")}
          style={{
            height: 62,
            width: SIZES.width - 32,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: COLORS.primary,
            borderWidth: .5,
          }}
        >
          <Feather name="plus" size={24} color={COLORS.primary} />
          <Text style={{
            fontSize: 16,
            textTransform: "uppercase",
            color: COLORS.primary,
            marginLeft: 12
          }}>ADD NEW</Text>
        </Pressable>
      </View>
    )
  }

  const renderPaymentBtn = () => {
    return (
      <View style={{
        position: 'absolute',
        bottom: 30,
        width: SIZES.width - 32
      }}>
       
        <Button
          filled
          title="CONFIRM"
          onPress={() => navigation.navigate("PaymentDeclined")}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar hidden={true} />
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        {renderHeader()}
        {renderAvailablePayments()}
        {renderPaymentBtn()}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: COLORS.gray6
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  cardImage: {
    width: 100,
    height: 50,
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    color: COLORS.black,
    fontFamily: "regular",
    marginVertical: 4
  }
});

export default PaymentMethod