import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListScreen from '../screens/UserListScreen';
import UserAddScreen from '../screens/UserAddScreen';
import UserViewScreen from '../screens/UserViewScreen';
import UserModifyScreen from '../screens/UserModifyScreen';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#4caf50' },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="UserListScreen"
        component={UserListScreen}
        options={{ title: 'List Users' }}
      />
      <Stack.Screen
        name="UserAddScreen"
        component={UserAddScreen}
        options={{ title: 'Add User' }}
      />
      <Stack.Screen
        name="UserViewScreen"
        component={UserViewScreen}
        options={{ title: 'View User' }}
      />
      <Stack.Screen
        name="UserModifyScreen"
        component={UserModifyScreen}
        options={{ title: 'Modify User' }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
