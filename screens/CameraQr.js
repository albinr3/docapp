// Imports y estado inicial simplificado con false en lugar de null
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import NotificationComponent from '../components/NotificationComponent'; // Asegúrate de que la ruta del import es correcta

// Definir CameraView fuera del componente App
const CameraView = ({ scanned, handleBarCodeScanned }) => {
  const onBarCodeScanned = scanned ? undefined : handleBarCodeScanned;
  return(
    <View style={styles.cameraContainer}>
    <BarCodeScanner
      onBarCodeScanned={onBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    </View>
  )
  
  };

const CameraQr = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [notification, setNotification] = useState('');

  const handleBarCodeScanned = useCallback(({ type, data }) => {
    setScanned(true);
    setNotification(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("Login")
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


  if (!hasPermission) {
    // Renderizando un componente cuando no hay permisos
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {hasPermission === false
            ? "Camera permission not granted"
            : "Requesting for camera permission"}
        </Text>
      </View>
    );
  }

  // useEffect(() => {
  //   let timeout;
  
  //   // Función para manejar el escaneo automático
  //   const handleAutomaticScan = () => {
  //     timeout = setTimeout(() => {
  //       setScanned(false);
  //     }, 5000); // 5 segundos para el re-escaneo automático
  //   };
  
  //   // Lógica condicional para activar el escaneo automático
  //   if (scanned) {
  //     handleAutomaticScan();
  //   }
  
  //   // Limpieza del timeout
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [scanned]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
      <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
      <CameraView scanned={scanned} handleBarCodeScanned={handleBarCodeScanned}/>
      <NotificationComponent
        message={notification}
        onDismiss={() => setNotification('')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 20,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
});
export default CameraQr;