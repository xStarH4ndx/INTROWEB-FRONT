import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/sesiones/LoginScreen';
import OperatorPage from '../screens/operador/OperatorPage';
import AdminPage from '../screens/admin/AdminPage';
import EjemploInitialScreem from '../screens/sesiones/ejemploInitialScreen';

export type RootStackParamList = {
  // Definir los nombres de las pantallas
  Initial: Record<string, string> | undefined;
  Login: Record<string, string> | undefined;
  AdminPage: Record<string, string> | undefined;
  OperatorPage: Record<string, string> | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      {/* PAGINA 1 */}
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Initial" component={EjemploInitialScreem} />
        </Stack.Group>

        {/* PAGINA 2 */}
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
          >
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Group>

        {/* PAGINA 3 */}
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="OperatorPage" component={OperatorPage} />
        </Stack.Group>
        
        {/* PAGINA 4 */}
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="AdminPage" component={AdminPage} />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
