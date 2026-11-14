import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import colors from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.list}
      ListHeaderComponent={
        <Text style={styles.count}>{products.length} items</Text>
      }
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() => navigation.navigate('Product', { product: item })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  count: {
    fontSize: 12,
    color: colors.muted,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
});