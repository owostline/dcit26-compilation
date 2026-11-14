import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import Rating from './Rating';
import colors from '../theme/colors';

export default function ProductCard({ product, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {product.description}
        </Text>
        <Rating value={product.rating} size={13} />
      </View>
      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 12,
  },
  pressed: {
    backgroundColor: colors.border,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  description: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 4,
    marginBottom: 8,
  },
  arrow: {
    fontSize: 28,
    color: colors.pink,
    marginLeft: 12,
  },
});