import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function MenuButton({ navigation }) {
  return (
    <Pressable onPress={() => navigation.openDrawer()} style={styles.button}>
      <Text style={styles.icon}>☰</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
  },
  icon: {
    fontSize: 22,
    color: colors.purple,
  },
});