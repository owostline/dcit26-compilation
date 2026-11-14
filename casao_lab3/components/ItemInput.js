import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ItemInput({ onAddItem }) {
  const [enteredText, setEnteredText] = useState('');

  function addHandler() {
    if (enteredText.trim() === '') return;
    onAddItem(enteredText.trim());
    setEnteredText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Item"
        value={enteredText}
        onChangeText={setEnteredText}
      />
      <Button title="ADD" color="#b98b62" onPress={addHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: '#e3cfa8',
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#8b5e3c',
    paddingVertical: 4,
    paddingHorizontal: 4,
    marginRight: 12,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#4a3b2f',
    outlineStyle: 'none',
  },
});
