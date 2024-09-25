import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Input, Text, useTheme } from '@rneui/themed';
import { View, Alert } from 'react-native';
import axios from 'axios';
import { RootStackParamList } from '../../navigation/rootStackNavigation';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el login
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://tu-api.com/login', {
        username,
        password,
      });

      // Manejo de la respuesta exitosa
      if (response.data.success) {
        console.log('Login exitoso:', response.data);
        // Navega a la pantalla deseada después de un login exitoso
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en el login:', error);
      Alert.alert('Error', 'Hubo un problema con el login');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E3F2FD', // Fondo azul claro
      }}
    >
      <Text
        h4
        style={{
          color: '#0D47A1', // Azul oscuro para el título
          marginBottom: 20,
          fontFamily: 'Comic Sans MS', // Fuente divertida
        }}
      >
        Login Screen
      </Text>

      <Input
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        containerStyle={{ marginBottom: 15 }}
        inputStyle={{ color: '#000000' }} // Texto en negro
        placeholderTextColor="#B0BEC5"
        style={{
          borderColor: '#0D47A1', // Borde azul oscuro
          borderWidth: 1,
          borderRadius: 5,
        }}
      />

      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={{ marginBottom: 15 }}
        inputStyle={{ color: '#000000' }} // Texto en negro
        placeholderTextColor="#B0BEC5"
        style={{
          borderColor: '#0D47A1', // Borde azul oscuro
          borderWidth: 1,
          borderRadius: 5,
        }}
      />

      <Button
        title="Entrar"
        onPress={handleLogin}
        buttonStyle={{
          backgroundColor: '#1976D2', // Azul medio para el botón
          borderRadius: 5,
        }}
      />

      <Button
        onPress={() => navigation.navigate('Initial')}
        title="GO INITIAL"
        buttonStyle={{ backgroundColor: '#0D47A1', borderRadius: 5 }}
      />
      <Button
        onPress={() => navigation.navigate('Home')}
        title="GO HOME"
        buttonStyle={{ backgroundColor: '#0D47A1', borderRadius: 5 }}
      />
    </View>
  );
};

export default LoginScreen;
