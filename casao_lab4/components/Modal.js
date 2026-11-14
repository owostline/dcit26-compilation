import React from 'react';
import { Modal, View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Button from './Button';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.window}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Warning</Text>
          </View>

          <View style={styles.body}>
            <Image
              source={require('../assets/icon.png')}
              style={styles.image}
            />

            <Text style={styles.heading}>YOU HAVE BEEN HACKED</Text>

            <ScrollView style={styles.textBox}>
              <Text style={styles.paragraph}>
                All of your files have been locked. This includes your photos,
                documents, and videos.
              </Text>
              <Text style={styles.paragraph}>
                If you do not pay ₱10,000 within 24 hours, all of your files
                will be permanently deleted.
              </Text>
              <Text style={styles.paragraph}>
                Do not turn off your device. Do not contact anyone. Any attempt
                to remove this program will delete your files immediately.
              </Text>
              <Text style={styles.paragraph}>
                Once payment is received, your files will be restored.
              </Text>
            </ScrollView>

            <Button title="Close" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    backgroundColor: '#AA0000',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  titleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  body: {
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
  },
  heading: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC0000',
    textAlign: 'center',
  },
  textBox: {
    width: '100%',
    height: 110, 
    marginVertical: 14,
    padding: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderTopColor: '#404040',
    borderLeftColor: '#404040',
    borderBottomColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
    marginBottom: 10,
  },
});