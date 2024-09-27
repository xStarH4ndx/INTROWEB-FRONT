import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { RootStackParamList } from '../../navigation/rootStackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();
  
  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('Token:', token);
    };
    checkToken();
  }, []);

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
          <Text h1 style={styles.emoji}>👷</Text>
          <Text h2 style={styles.title}>Bienvenido Operador</Text>
          <Text style={styles.subtitle}>Usuario autenticado con éxito</Text>
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
  emoji: {
    fontSize: 72,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;