import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from '../screens/ModuleListScreen';
import ModuleAddScreen from '../screens/ModuleAddScreen';
import ModuleViewScreen from '../screens/ModuleViewScreen';
import ModuleModifyScreen from '../screens/ModuleModifyScreen';

const Stack = createNativeStackNavigator();

const ModuleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ModuleListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#03a9f4' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="ModuleListScreen"
        component={ModuleListScreen}
        options={{ title: 'List Modules' }}
      />
      <Stack.Screen
        name="ModuleAddScreen"
        component={ModuleAddScreen}
        options={{ title: 'Add Module' }}
      />
      <Stack.Screen
        name="ModuleViewScreen"
        component={ModuleViewScreen}
        options={{ title: 'View Module' }}
      />
      <Stack.Screen
        name="ModuleModifyScreen"
        component={ModuleModifyScreen}
        options={{ title: 'Modify Module' }}
      />
    </Stack.Navigator>
  );
};

export default ModuleStack;
