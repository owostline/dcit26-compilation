import React from 'react';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

export default function AboutScreen({ navigation }) {
  return (
    <Screen>
      <AppButton title="Go back" onPress={() => navigation.navigate('HomeDrawer')} />
    </Screen>
  );
}