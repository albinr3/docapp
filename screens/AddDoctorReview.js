import { View, Text, StyleSheet, ImageBackground, Pressable, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons, images } from '../constants'
import HeaderIcon from '../components/HeaderIcon'
import { Feather } from "@expo/vector-icons"
import Rating from '../components/Rating'
import { launchImagePicker } from '../utils/ImagePickerHelper'

const AddDoctorReview = ({ navigation }) => {
  /***
    * Render header
    */
  const renderHeader = () => {
    return (
      <ImageBackground source={images.hospital5} style={styles.headerContainer}>
        <View style={styles.headerIconContainer}>
          <HeaderIcon
            icon={icons.back}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ImageBackground>
    )
  }

  /**
   * Render content
   */

  const renderContent = () => {
    const [comment, setComment] = useState("");
    const [image, setImage] = useState(null);

    const handleCommentChange = (text) => {
      setComment(text);
    };

    const pickImageHandler = async () => {
      try {
        const tempUri = await launchImagePicker()

        if (!tempUri) return

        // set the image
        setImage({ uri: tempUri })
      } catch (error) { }
    }



    return (
      <View style={styles.contentContainer}>
        <View style={{ paddingHorizontal: 16 }}>
          <Pressable
            style={{
              alignItems: "center",
              width: "100%",
              top: -36
            }}>
            <Pressable>
              <Image
                source={images.doctor1}
                resizeMode='contain'
                style={styles.doctorAvatar}
              />
              <Image
                source={icons.verified}
                resizeMode='contain'
                style={styles.doctorAvatarVerified}
              />
            </Pressable>
            <Text style={styles.doctorName}>Dr. Jonny Wilson</Text>
            <Text style={styles.doctorPosition}>Dentist</Text>
          </Pressable>

          <View style={{ alignItems: "center", marginBottom: 16 }}>
            <Text style={styles.experienceTitle}>How was your experience with Jonny?</Text>
          </View>

          <View style={styles.separateLine} />
          <View style={{ alignItems: "center", marginVertical: 12 }}>
            <Text style={styles.inputTitle}>Your overall rating</Text>
            <Rating />
          </View>
          <Text style={styles.inputLabel}>Add detailed review</Text>
          <TextInput
            style={styles.input}
            placeholder="Write your comment here..."
            multiline={true}
            numberOfLines={4} // Set the number of lines you want to display initially
            onChangeText={handleCommentChange}
            value={comment}
          />
          <Pressable
            onPress={pickImageHandler}
            style={styles.selectPhotoContainer}>
            <Feather name="camera" size={20} color={COLORS.primary} />
            <Text style={styles.selectPhotoText}>add photo</Text>
          </Pressable>
        </View>
      </View>
    )
  }
  /**
   * Render submit buttons
   */
  const renderSubmitButton = () => {
    return (
      <View style={styles.btnContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.area}>
      <View style={styles.container}>
        {renderHeader()}
        {renderContent()}
        {renderSubmitButton()}
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
  input: {
    borderColor: "gray",
    borderWidth: .3,
    borderRadius: 5,
    width: "100%",
    padding: 10,
    paddingBottom: 10,
    fontSize: 12,
    height: 150,
    textAlignVertical: "top"
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
  },
  selectPhotoContainer: {
    flexDirection: "row",
    marginVertical: 12
  },
  selectPhotoText: {
    fontSize: 12,
    color: COLORS.primary,
    fontFamily: "regular",
    marginLeft: 6
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: "medium",
    color: COLORS.black
  },
  inputTitle: {
    fontSize: 12,
    fontFamily: "regular",
    color: COLORS.black
  },
  experienceTitle: {
    fontSize: 14,
    fontFamily: "medium",
    color: COLORS.black
  },
  doctorAvatar: {
    height: 108,
    width: 108,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: COLORS.white
  },
  doctorAvatarVerified: {
    height: 24,
    width: 24,
    position: 'absolute',
    bottom: 22,
    right: -2,
    zIndex: 999
  },
  doctorName: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black
  },
  doctorPosition: {
    fontSize: 14,
    fontFamily: "regular",
    color: "gray"
  }
})
export default AddDoctorReview