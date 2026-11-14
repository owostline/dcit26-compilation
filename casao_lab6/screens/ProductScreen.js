import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Rating from '../components/Rating';
import colors from '../theme/colors';

export default function ProductScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.key}>Product #{product.key}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Rating value={product.rating} size={18} />

        <View style={styles.divider} />

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
  },
  key: {
    fontSize: 11,
    color: colors.pink,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  label: {
    fontSize: 11,
    color: colors.purple,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 20,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
});