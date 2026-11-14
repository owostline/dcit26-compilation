import React from 'react';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <AppButton title="Profile" onPress={() => navigation.navigate('Profile')} />
    </Screen>
  );
}