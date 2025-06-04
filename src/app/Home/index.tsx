import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import { styles } from "./styles"


export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Open up App.tsx to start woraaaking on your app! teste w</Text>
      <StatusBar style="auto" />
    </View>
  );
}
