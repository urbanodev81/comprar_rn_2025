import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, Button as But} from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <Input placeholder='Ex: Maça' />
      <Button title='adicionar' />
      <Button title='alterar' activeOpacity={0.4} />
      <Button title='remover' activeOpacity={0.2} />
      <Text style={styles.text}>Open up App.tsx to start woraaaking on your app! teste w</Text>
    </View>
  );
}
