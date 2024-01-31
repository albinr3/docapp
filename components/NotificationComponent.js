import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationComponent = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(false); // Inicializar como false

  useEffect(() => {
    if (message) setVisible(true);
    else setVisible(false); // Establecer visible en false si el mensaje es vacío
  }, [message]);

  const handleDismiss = () => {
    setVisible(false);
    if (onDismiss) onDismiss();
  };

  if (!visible) return null;

  return (
    <View style={styles.notification}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={handleDismiss}>
        <Text style={styles.dismissText}>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    // Estilos del componente
  },
  message: {
    // Estilos del mensaje
  },
  dismissText: {
    // Estilos del botón Dismiss
  },
});

export default NotificationComponent;
