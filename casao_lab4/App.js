import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Button from './components/Button';
import Modal from './components/Modal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.desktop}>
      <StatusBar style="light" />

      <View style={styles.window}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Congratulations!</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.message}>
            --You are our 1,000,000th visitor--
          </Text>
          <Text style={styles.prize}>You WON ₱50,000 and an iPhone 67 Pro Max 1 TB !!</Text>

          <Button title="CLAIM PRIZE" onPress={() => setModalVisible(true)} />
        </View>
      </View>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desktop: {
    flex: 1,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  window: {
    width: '100%',
    backgroundColor: '#C0C0C0',
    borderWidth: 2,
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
  },
  titleBar: {
    backgroundColor: '#000080',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  body: {
    padding: 20,
    alignItems: 'center',
  },
  message: {
    fontSize: 15,
    color: '#000000',
  },
  prize: {
    marginTop: 6,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center'
  },
});