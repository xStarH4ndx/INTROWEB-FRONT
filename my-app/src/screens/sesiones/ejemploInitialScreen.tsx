import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme, useThemeMode } from '@rneui/themed';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { RootStackParamList } from '../../navigation/rootStackNavigation';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomePage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();

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
          <Text h1 style={styles.title}>Bienvenido al cuestionario de operadores</Text>
          <Text style={styles.subtitle}>¿Qué desea hacer?</Text>
          
          <Button
            title="GO LOGIN"
            onPress={() => navigation.navigate('Login')}
            buttonStyle={[styles.button, { backgroundColor: theme.colors.primary }]}
            containerStyle={styles.buttonContainer}
          />
          
          <Button
            title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
            onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
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

export default WelcomePage;