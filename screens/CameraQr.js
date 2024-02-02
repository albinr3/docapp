// Imports from React and React Native packages necessary for the functionality of the app
import { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'

//import { StyleSheet, Text, SafeAreaView, StatusBar, View, Dimensions } from 'react-native';
import { StyleSheet, Text, StatusBar, View, Dimensions } from 'react-native';
import { Camera } from 'expo-camera'; // Importing Camera module from expo-camera for camera functionality
import { COLORS } from '../constants'; // Importing predefined color constants

// Get the window dimensions for later usage in layout calculations
const windowDimensions = Dimensions.get('window');
// Calculate the vertical and horizontal spacing around the QR code mask
//this is out of the component to avoid calculations on every render.
const maskRowHeight = Math.round((windowDimensions.height - 300) / 20);
const maskColWidth = (windowDimensions.width - 300) / 2;

// Main functional component for the Camera QR code scanner
const CameraQr = ({navigation}) => {
  // State hooks for handling camera permissions and to track if a QR code has been scanned
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  // Callback function triggered when a barcode is scanned
  const handleBarCodeScanned = useCallback(({ type, data }) => {
    setScanned(true); // Set the scanned state to true when QR code is detected
  }, []);

  // Effect hook to prevent to be scanned continuously, this wait for 5 secs before scan again
  useEffect(() => {
    let timeout;
  
    const handleAutomaticScan = () => {
      timeout = setTimeout(() => {
        setScanned(false) // Reset scanned state after 5 seconds
      }, 5000); 
    };
  
    if (scanned) { // Only activate the automatic scan reset when a code has been scanned
      handleAutomaticScan();
    }
  
    // Cleanup function to clear the timeout when the component is unmounted or re-rendered
    return () => {
      clearTimeout(timeout);
    };
  }, [scanned]);

  // If no camera permissions are granted, display a text message
  if (!permission?.granted) {
    return <Text>No camera permission. Check your app settings.</Text>;
  }
 ////////////////////////////////////////////////////////////////////////////////////////

  // Sub component for the camera display and mask layout
  const CameraView = ({ scanned, handleBarCodeScanned }) => {
    // Prevent barcode scan function from being called if already scanned
    const onBarCodeScanned = scanned ? undefined : handleBarCodeScanned;
    
    // Camera and mask layout configuration
    return(
      <View style={styles.cameraContainer}>
        <Camera
          onBarCodeScanned={onBarCodeScanned}
          style={styles.camera}  
        />
        {/* Mask layout, to create a box to read the qr code */}
        <View style={styles.maskOutter}>
          
          <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
          <View style={[{ flex: 30 }, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
          <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
        </View>
      </View>
    )
  };

  // Main render function of the CameraQr component
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle='light-content' backgroundColor={COLORS.primary}/>
      <View style={styles.textContainer}>
        {/* Static text to instruct users */}
        <Text style={styles.paragraph}>Scan a QR code </Text>
        <Text style={styles.paragraph}>to book an appointment.</Text>
      </View>
      {/* Render the CameraView component with relevant props */}
      <CameraView scanned={scanned} handleBarCodeScanned={handleBarCodeScanned}/>
    </SafeAreaView>
  );
}

// StyleSheet to hold all the styling for the components in this file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  textContainer: {

    justifyContent: 'center', 
    alignItems: 'center',
    height: 80
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
    color: COLORS.secondaryGray
  },
  cameraContainer: {
    width: '100%',
    height: "100%"
  },
  camera: {
    flex: 1
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {
    flexDirection: 'row',
  },
  maskFrame: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});

export default CameraQr;
