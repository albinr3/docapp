
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { CameraView,Camera, useCameraPermissions, BarCodeScannerSettings } from 'expo-camera/next';
import { Button, StyleSheet, Text, Pressable, View } from 'react-native';

const CameraQr = ({navigation}) => {

    const [facing, setFacing] = useState('front');
    const [permission, requestPermission] = useCameraPermissions();
    const [scannedData, setScannedData] = useState('');

    useEffect(() => {
        requestPermission();
        console.log(permission)
      }, []);

    if (!permission) {
        console.log("No tienes permiso")
    } 

    const handleBarCodeScanned = ({ type, data }) => {
        // Handle scanned QR code data here
        setScannedData(data);
        console.log(data)
      };
    function toggleCameraFacing() {
        console.log(permission)
        if (permission.granted) {
            setFacing(current => (current === 'back' ? 'front' : 'back'));
            console.log(facing)
        } 
        
        
    }

  return (
    <SafeAreaView style= {styles.container}>
        <CameraView style={styles.camera}  
            onBarCodeScanned={handleBarCodeScanned} 
            barCodeScannerSettings={{barCodeTypes: ["qr"]
            }}/>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </Pressable>
        </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    camera: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 5,
    },
    text: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default CameraQr
