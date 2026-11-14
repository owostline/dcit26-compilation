import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import colors from '../theme/colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: colors.purple,
        drawerActiveBackgroundColor: colors.border,
        drawerInactiveTintColor: colors.muted,
        drawerStyle: { backgroundColor: colors.surface },
        drawerItemStyle: { borderRadius: 4 },
      }}
    >
      <Drawer.Screen name="HomeDrawer" component={HomeStack} options={{ title: 'Home' }} />
      <Drawer.Screen name="AboutDrawer" component={AboutStack} options={{ title: 'About' }} />
    </Drawer.Navigator>
  );
}