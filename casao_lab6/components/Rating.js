import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function Rating({ value, size = 14 }) {
  const stars = '★'.repeat(value) + '☆'.repeat(5 - value);

  return (
    <View style={styles.row}>
      <Text style={[styles.stars, { fontSize: size }]}>{stars}</Text>
      <Text style={[styles.number, { fontSize: size - 2 }]}>{value}/5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    color: colors.yellow,
    letterSpacing: 2,
  },
  number: {
    color: colors.muted,
    marginLeft: 8,
  },
});