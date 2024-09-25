import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme, useThemeMode } from '@rneui/themed';
import { View } from 'react-native';
import { RootStackParamList } from '../../navigation/rootStackNavigation';

const EjemploInitialScreem = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text>Initial Screen</Text>
      <Text>
        {JSON.stringify({
          EXPO_PUBLIC_MS_IAM: process?.env?.EXPO_PUBLIC_MS_IAM,
        })}
      </Text>
      <Button buttonStyle={{ marginTop: 10}} onPress={() => navigation.navigate('Login')}>GO LOGIN</Button>
      <Button
        onPress={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        Change to {mode === 'light' ? 'dark' : 'light'} mode
      </Button>
    </View>
  );
};

export default EjemploInitialScreem;
