import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import {COLORS, images} from '../constants';

const Onboarding2 = ({navigation}) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (progress >= 2) {
      navigation.navigate('Onboarding3');
    } else {
      // This should ensure that the dot is marked as active after 2 seconds
      const timer = setTimeout(() => {
        setProgress(2);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [progress, navigation]);

  return (
    <SafeAreaView style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={images.onboarding2}
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
              <Text style={[Onboarding1Styles.title]}>Find Your Perfect</Text>
              <Text style={Onboarding1Styles.subTitle}>MEDICAL CARE</Text>
            </View>

            <Text style={Onboarding1Styles.description}>
            We simplify the process of finding the ideal medical care or specialist in the healthcare industry.
            </Text>

            <View style={Onboarding1Styles.dotsContainer}>
              <DotsView progress={progress} numDots={4} />
            </View>
            <Button
              title="Next"
              filled
              onPress={() => navigation.navigate('Onboarding3')}
              style={Onboarding1Styles.nextButton}
            />
            <Button
              title="Skip"
              onPress={() => navigation.navigate('Login')}
              textColor={COLORS.secondary}
              style={Onboarding1Styles.skipButton}
            />
          </View>
        </View>
      </PageContainer>
    </SafeAreaView>
  );
};

export default Onboarding2;