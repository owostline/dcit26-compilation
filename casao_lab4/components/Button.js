import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C0C0C0',
    paddingVertical: 8,
    paddingHorizontal: 28,
    borderWidth: 2,
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    borderBottomColor: '#404040',
    borderRightColor: '#404040',
  },
  pressed: {
    borderTopColor: '#404040',
    borderLeftColor: '#404040',
    borderBottomColor: '#FFFFFF',
    borderRightColor: '#FFFFFF',
  },
  text: {
    fontSize: 14,
    color: '#000000',
  },
});