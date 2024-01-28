import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from 'react'
import {
    Onboarding1,
    Onboarding2,
    Onboarding3,
    Onboarding4,
    Signup,
    Verification,
    Login,
    StartUpScreen,
    ForgotPassword,
    ResetPassword,
    PhoneVerification,
    Welcome,
    SuccessRegister,
    ChangePassword,
    LocationAccess,
    PersonalProfile,
    EditProfile,
    Address,
    AddNewAddress,
    PaymentMethod,
    AddNewPaymentMethod,
    PaymentSuccess,
    AddNewPaymentMethodSuccess,
    PaymentDeclined,
    AddNewPaymentMethodDeclined,
    Faqs,
    SubmitQuestion,
    Settings,
    Chat,
    Call,
    AllSpecialists,
    AllHospitals,
    Favourite,
    HospitalDetails,
    DoctorDetails,
    SelectPackage,
    PatientDetails,
    PaymentMethods,
    ReviewSummary,
    BookSuccess,
    AddCard,
    AddDoctorReview,
    AddHospitalReview,
    CancelAppointment,
    Category,
    ConsultationEnded,
    MyAppointmentDetail,
    MyBookings,
    VideoCall,
    Notifications,
    History,
    BookAppointment
} from '../screens'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('isFirstLaunch before navigation decision:1', isFirstLaunch);

        const checkIfFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('alreadyLaunched');
                
                if (value === null) {
                    await AsyncStorage.setItem('alreadyLaunched', 'true');
                    setIsFirstLaunch(true);
                } else {
                    
                    setIsFirstLaunch(false);
                }
            } catch (error) {
                setIsFirstLaunch(false);
                console.log(error);
            }
            setIsLoading(false); // Set loading state to false once the check is complete
        }

        checkIfFirstLaunch();
        console.log('isFirstLaunch before navigation decision:2', isFirstLaunch);

    }, [])
   
    if (isLoading) {
        console.log('isFirstLaunch before navigation decision:4', isFirstLaunch);

        return null // Render a loader or any other loading state component
        
    }
    console.log('isFirstLaunch before navigation decision:3', isFirstLaunch);

   
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ headerShown: false }}
                initialRouteName={isFirstLaunch ? 'Onboarding1' : 'Login'}>
                <Stack.Screen name="Onboarding1" component={Onboarding1}/>
                <Stack.Screen name="Onboarding2" component={Onboarding2}/>
                <Stack.Screen name="Onboarding3" component={Onboarding3}/>
                <Stack.Screen name="Onboarding4" component={Onboarding4}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="StartUpScreen" component={StartUpScreen}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword}/>
                <Stack.Screen name="Verification" component={Verification}/>
                <Stack.Screen name="PhoneVerification" component={PhoneVerification}/>
                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="SuccessRegister" component={SuccessRegister}/>
                <Stack.Screen name="ChangePassword" component={ChangePassword}/>
                <Stack.Screen name="LocationAccess" component={LocationAccess}/>
                <Stack.Screen name="Main" component={BottomTabNavigation}/>
                <Stack.Screen name="PersonalProfile" component={PersonalProfile}/> 
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="Address" component={Address}/>
                <Stack.Screen name="AddNewAddress" component={AddNewAddress}/>
                <Stack.Screen name="PaymentMethod" component={PaymentMethod}/>
                <Stack.Screen name="AddNewPaymentMethod" component={AddNewPaymentMethod}/>
                <Stack.Screen name="PaymentSuccess" component={PaymentSuccess}/>
                <Stack.Screen name="PaymentDeclined" component={PaymentDeclined}/>
                <Stack.Screen name="AddNewPaymentMethodDeclined" component={AddNewPaymentMethodDeclined}/> 
                <Stack.Screen name="AddNewPaymentMethodSuccess" component={AddNewPaymentMethodSuccess}/>
                <Stack.Screen name="Faqs" component={Faqs}/>
                <Stack.Screen name="SubmitQuestion" component={SubmitQuestion}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Chat" component={Chat}/>
                <Stack.Screen name="Call" component={Call}/>
                <Stack.Screen name="AllSpecialists" component={AllSpecialists}/>
                <Stack.Screen name="AllHospitals" component={AllHospitals}/>
                <Stack.Screen name="Favourite" component={Favourite}/>
                <Stack.Screen name="HospitalDetails" component={HospitalDetails}/>
                <Stack.Screen name="DoctorDetails" component={DoctorDetails}/>
                <Stack.Screen name="BookAppointmemt" component={BookAppointment}/>
                <Stack.Screen name="SelectPackage" component={SelectPackage}/>
                <Stack.Screen name="PatientDetails" component={PatientDetails}/>
                <Stack.Screen name="PaymentMethods" component={PaymentMethods}/>
                <Stack.Screen name="ReviewSummary" component={ReviewSummary}/>
                <Stack.Screen name="BookSuccess" component={BookSuccess}/>
                <Stack.Screen name="AddCard" component={AddCard}/>
                <Stack.Screen name="AddDoctorReview" component={AddDoctorReview}/>
                <Stack.Screen name="AddHospitalReview" component={AddHospitalReview}/>
                <Stack.Screen name="CancelAppointment" component={CancelAppointment}/>
                <Stack.Screen name="Category" component={Category}/>
                <Stack.Screen name="ConsultationEnded" component={ConsultationEnded}/>
                <Stack.Screen name="MyAppointmentDetail" component={MyAppointmentDetail}/>
                <Stack.Screen name="MyBookings" component={MyBookings}/>
                <Stack.Screen name="VideoCall" component={VideoCall}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="History" component={History}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation