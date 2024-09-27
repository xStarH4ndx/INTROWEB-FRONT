import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Input, Text, useTheme } from '@rneui/themed';
import { View, Alert, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../../navigation/rootStackNavigation';
import { LinearGradient } from 'expo-linear-gradient';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  return token;
}

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const email = username;
      const response = await axios.post(
        'https://census-sally-largely-ind.trycloudflare.com/', 
        { email, password }
      );

      response.data.success = true;
      response.data.token = 'token';
      if (response.data.success) {
        console.log('Login exitoso:', response.data);
        await AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('OperatorPage');
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error en el login:', error);
      Alert.alert('Error', 'Hubo un problema con el login');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww' }}
      style={styles.background}
    >
      <LinearGradient
        colors={[theme.colors.primary + '80', theme.colors.secondary + '80']}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text h2 style={styles.title}>Login</Text>
          
          <Input
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            placeholderTextColor="rgba(255,255,255,0.7)"
            leftIcon={{ type: 'font-awesome', name: 'user', color: 'white' }}
          />

          <Input
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            containerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
            placeholderTextColor="rgba(255,255,255,0.7)"
            leftIcon={{ type: 'font-awesome', name: 'lock', color: 'white' }}
          />

          <Button
            title="Entrar"
            onPress={handleLogin}
            buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
            containerStyle={styles.buttonContainer}
          />

          <Button
            title="GO ADMIN"
            onPress={() => navigation.navigate('AdminPage')}
            buttonStyle={[styles.button, { backgroundColor: theme.colors.secondary }]}
            containerStyle={styles.buttonContainer}
          />

          <Button
            title="GO OPERATOR"
            onPress={() => navigation.navigate('OperatorPage')}
            buttonStyle={[styles.button, { backgroundColor: theme.colors.secondary }]}
            containerStyle={styles.buttonContainer}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  inputText: {
    color: 'white',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 15,
  },
});

export default LoginScreen;