import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PageContainer from '../components/PageContainer';
import DotsView from '../components/DotsView';
import Button from '../components/Button';
import Onboarding1Styles from '../styles/OnboardingStyles';
import { COLORS, images } from '../constants';

const Onboarding1 = ({navigation}) => {
  const [progress, setProgress] = useState(0);

  // First useEffectM
  useEffect(() => {
    if (progress >= 1) {
      navigation.navigate("Login");
    } else {
      // This should ensure that the dot is marked as active after 2 seconds
      const timer = setTimeout(() => {
        setProgress(1);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [progress]);



  return (
    <SafeAreaView style={Onboarding1Styles.container}>
      <PageContainer>
        <View style={Onboarding1Styles.contentContainer}>
          <Image
            source={images.onboarding1}
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
              <Text style={[Onboarding1Styles.title]}>Welcome to</Text>
              <Text style={Onboarding1Styles.subTitle}>Online Doctor App</Text>
            </View>

            <Text style={Onboarding1Styles.description}>
              Find the Best doctors and hospitals near you with just one of best app
            </Text>

            <View style={Onboarding1Styles.dotsContainer}>
              <DotsView progress={progress} numDots={4} />
            </View>
            <Button
              title="Next"
              filled
              onPress={() => navigation.navigate('Onboarding2')}
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

export default Onboarding1;