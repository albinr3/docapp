import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import {COLORS, images} from '../constants';

const Onboarding4 = ({navigation}) => {
  const [progress, setProgress] = useState(3);

  useEffect(() => {
    if (progress >= 4) {
      navigation.navigate('PreSignup');
    } else {
      // This should ensure that the dot is marked as active after 2 seconds
      const timer = setTimeout(() => {
        setProgress(4);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [progress, navigation]);

  return (
    <SafeAreaView style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={images.onboarding6}
            resizeMode="contain"
            style={Onboarding1Styles.illustration}
          />
          <Image
            source={images.ornament}
            resizeMode="contain"
            style={Onboarding1Styles.ornament}
          />
          <View style={Onboarding1Styles.buttonContainer}>
            <View style={Onboarding1Styles.titleContainer}>
              <Text style={[Onboarding1Styles.title]}>Ready to Start Your Health</Text>
              <Text style={Onboarding1Styles.subTitle}>JOURNEY?</Text>
            </View>

            <Text style={Onboarding1Styles.description}>
            Sign up now to begin exploring the world of healthcare options, 
          and take the first step towards a healthier you.
            </Text>

            <View style={Onboarding1Styles.dotsContainer}>
              <DotsView progress={progress} numDots={4} />
            </View>
            <Button
              title="Next"
              filled
              onPress={() => navigation.replace('PreSignup')}
              style={Onboarding1Styles.nextButton}
            />
            <Button
              title="Skip"
              onPress={() => navigation.replace('PreSignup')}
              textColor={COLORS.secondary}
              style={Onboarding1Styles.skipButton}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Onboarding4