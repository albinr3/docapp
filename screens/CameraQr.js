// Imports y estado inicial simplificado con false en lugar de null
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import NotificationComponent from '../components/NotificationComponent'; // Asegúrate de que la ruta del import es correcta


export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [notification, setNotification] = useState('');

  const handleBarCodeScanned = useCallback(({ type, data }) => {
    setScanned(true);
    setNotification(`Bar code with type ${type} and data ${data} has been scanned!`);
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Desacoplamiento del renderizado de la cámara en su propio componente
  const CameraView = () => (
    <View style={styles.cameraContainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject} // Mejora en el estilo para ocupar todo el contenedor
      />
    </View>
  );

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

  // Intervalo para habilitar re-escaneo automáticamente
  useEffect(() => {
    let timeout;
    if (scanned) {
      timeout = setTimeout(() => {
        setScanned(false);
      }, 5000); // 5 segundos para el re-escaneo automático
    }
    return () => clearTimeout(timeout);
  }, [scanned]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
      <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
      <CameraView />
      <NotificationComponent
        message={notification}
        onDismiss={() => setNotification('')}
      />
      // Resto de tu código...
    </View>
  );
}

const styles = StyleSheet.create({
  // ... tus estilos previos aquí ...
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  camera: {
    flex: 1,
  },
  // ... más estilos si son necesarios ...
});

