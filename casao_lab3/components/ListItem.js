import { StyleSheet, View, Text } from 'react-native';

export default function ListItem({ text, number }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{number}</Text>
      </View>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#a7c4e2', 
    borderLeftWidth: 2,
    borderLeftColor: '#f0a6a6', 
  },
  badge: {
    width: 26,
    height: 26,
    borderWidth: 2,
    borderColor: '#8b5e3c',
    borderRadius: 4,
    backgroundColor: '#fde2a8', 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    transform: [{ rotate: '-4deg' }],
  },
  badgeText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    color: '#8b5e3c',
  },
  itemText: {
    flexShrink: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#4a3b2f',
  },
});
