import React from 'react';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

export default function ProfileScreen({ navigation }) {
  return (
    <Screen>
      <AppButton title="Go back home" onPress={() => navigation.goBack()} />
    </Screen>
  );
}