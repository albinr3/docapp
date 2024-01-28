import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import {COLORS, images} from '../constants';

const Onboarding3 = ({navigation}) => {
  const [progress, setProgress] = useState(2);

  useEffect(() => {
    if (progress >= 3) {
      navigation.navigate('Onboarding4');
    } else {
      // This should ensure that the dot is marked as active after 2 seconds
      const timer = setTimeout(() => {
        setProgress(3);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [progress, navigation]);

  return (
    <SafeAreaView style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={images.onboarding5}
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
              <Text style={[Onboarding1Styles.title]}>Find and Book Your Ideal</Text>
              <Text style={Onboarding1Styles.subTitle}>MEDICAL EXPERT</Text>
            </View>

            <Text style={Onboarding1Styles.description}>
            Embark on a journey to better health and locate the perfect medical expert who can guide you on your wellness path.
            </Text>

            <View style={Onboarding1Styles.dotsContainer}>
              <DotsView progress={progress} numDots={4} />
            </View>
            <Button
              title="Next"
              filled
              onPress={() => navigation.navigate('Onboarding4')}
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

export default Onboarding3