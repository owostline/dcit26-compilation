import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ItemInput from './components/ItemInput';
import ListItem from './components/ListItem';

export default function App() {
  const [items, setItems] = useState([]);

  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!fontsLoaded) {
    return null; 
  }

  function addItemHandler(text) {
    setItems((currentItems) => [
      ...currentItems,
      { id: Date.now().toString(), text },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To Do List</Text>
      <ItemInput onAddItem={addItemHandler} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ListItem text={item.text} number={index + 1} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf3df', 
    paddingTop: 40,
    paddingHorizontal: 20,
    borderTopWidth: 30,
    borderTopColor: '#b98b62', 
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 28,
    color: '#8b5e3c',
    textAlign: 'center',
    marginBottom: 10,
  },
});
