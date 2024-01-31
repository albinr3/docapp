import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationComponent = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(!!message);

  useEffect(() => {
    if(message) setVisible(true);
  }, [message]);

  const handleDismiss = () => {
    setVisible(false);
    if(onDismiss) onDismiss();
  };

  if(!visible) return null;

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
    position: 'absolute',
    top: 30, // you can adjust the position accordingly
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'white', // choose the color that fits your app
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#CCCCCC', // border color
    borderWidth: 1,
    borderRadius: 5,
    shadowOpacity: 0.35,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 3, width: 3 },
    elevation: 5, // for android shadow
  },
  message: {
    flex: 1,
  },
  dismissText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
});

export default NotificationComponent;
