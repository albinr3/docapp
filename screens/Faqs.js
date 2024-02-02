import { View, Text, Pressable, Image, LayoutAnimation, StyleSheet, Platform, UIManager } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, icons } from '../constants'
import { commonStyles } from '../styles/commonStyles'
import { ScrollView } from 'react-native-virtualized-view'
import Button from '../components/Button'

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Faqs = ({ navigation }) => {
  /**
   * Render FAQS header
   */
  function renderHeader() {
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
        <Text style={{ marginLeft: 12, fontSize: 17, fontFamily: "regular" }}>FAQS</Text>
      </View>
    )
  }

  /***
   * Render common question asked
   */

  function renderFAQS() {
    const [expanded, setExpanded] = useState(-1);
    const faqs = [
      {
        question: 'How do I book an appointment with a doctor?',
        answer: 'To book an appointment with a doctor, go to the "Book Appointment" section, select your preferred doctor, choose a suitable date and time, and confirm your booking.',
      },
      {
        question: 'Can I see a doctor virtually through this app?',
        answer: 'Yes, you can have virtual consultations with doctors through this app. Select the "Virtual Consultation" option when booking an appointment.',
      },
      {
        question: 'What should I do if I need to cancel or reschedule my appointment?',
        answer: 'To cancel or reschedule your appointment, go to the "My Appointments" section, find your appointment, and follow the provided options for making changes to your appointment.',
      },
      {
        question: 'How can I find a specialist for my specific medical condition?',
        answer: 'Use the app’s search feature to find specialists based on your medical condition. Filter results by specialty or location to find the most suitable doctor for your needs.',
      },
      {
        question: 'Is there a way to get prescriptions or medical advice online?',
        answer: 'Yes, you can request prescriptions and medical advice through virtual consultations with doctors. They can provide recommendations and prescriptions digitally.',
      },
      {
        question: 'What types of medical professionals are available on this app?',
        answer: 'Our app connects you with a wide range of medical professionals, including general practitioners, specialists, therapists, and more.',
      },
      {
        question: 'How do I pay for my medical consultations?',
        answer: 'You can securely pay for your medical consultations within the app using various payment methods, such as credit/debit cards or digital wallets.',
      },
      {
        question: 'Are my medical records and information kept confidential?',
        answer: 'Yes, we prioritize the security and confidentiality of your medical records and information. Our app complies with strict privacy and data protection standards.',
      },
      {
        question: 'Can I request home visits from doctors through this app?',
        answer: 'Yes, you can request home visits from doctors for certain medical services. Check the availability and terms for home visits in the app.',
      },
      {
        question: 'How can I provide feedback or rate my doctor after a consultation?',
        answer: 'After your consultation, you can provide feedback and rate your doctor through the app’s rating and review system to help improve the quality of our services.',
      },
      {
        question: 'Is emergency medical assistance available through this app?',
        answer: 'While we provide medical consultations, our app is not for emergency medical assistance. In case of emergencies, please call your local emergency services immediately.',
      },
    ];

    const toggleExpand = (index) => {
      LayoutAnimation.configureNext({
        duration: 200,
        create: {type: 'easeInEaseOut', property: 'scaleXY'},
      });;
      if (expanded === index) {
        setExpanded(-1);
      } else {
        setExpanded(index);
      }
    };

    return (
      <View style={styles.container}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <Pressable onPress={() => toggleExpand(index)} activeOpacity={0.8}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.icon}>{expanded === index ? '-' : '+'}</Text>
              </View>
            </Pressable>
            {expanded === index && <Text style={styles.answer}>{faq.answer}</Text>}
          </View>
        ))}
      </View>
    )
  }

  /**Render Button to ask question */

  function renderActionButtons() {
    return (
      <Button
        title="ASK QUESTION"
        onPress={() => navigation.navigate("SubmitQuestion")}
        filled
        style={{
          width: SIZES.width - 32,
          marginVertical: 12
        }}
      />
    )
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>
      <View style={{
        flex: 1,
        marginHorizontal: 16
      }}>
        {renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {renderFAQS()}
          {renderActionButtons()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 4,
    paddingTop: 20,
  },
  faqContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  question: {
    flex: 1,
    fontSize: 16,
    fontFamily: "medium",
    color: '#333',
  },
  icon: {
    fontSize: 18,
    color: '#666',
  },
  answer: {
    fontSize: 14,
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 10,
    fontFamily: "regular",
    color: COLORS.gray5,
  },
});

export default Faqs