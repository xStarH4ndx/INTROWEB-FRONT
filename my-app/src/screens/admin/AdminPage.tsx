import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { RootStackParamList } from '../../navigation/rootStackNavigation';

const AdminPage = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      }}
    >
      <Text
        h3
        style={{
          color: '#00FF00',
          fontFamily: 'Comic Sans MS', // Puedes cambiar la fuente a otra que te guste
          textAlign: 'center',
        }}
      >
        ¡Usuario autenticado con éxito! 🎉
      </Text>
    </View>
  );
};

export default AdminPage;
