import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import ModuleStack from './src/navigators/ModuleStack';
import ModuleStack from './src/components/navigators/ModuleStack';
import UserStack from './src/components/navigators/UserStack';
//import UserStack from './src/navigators/UserStack';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Modules"
        screenOptions={{
          headerStyle: { backgroundColor: '#6200ee' },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name="Modules"
          component={ModuleStack}
          options={{ title: 'Manage Modules' }}
        />
        <Drawer.Screen
          name="Users"
          component={UserStack}
          options={{ title: 'Manage Users' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
