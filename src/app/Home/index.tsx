import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, Button as But} from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View>
        <Input placeholder='Ex: Maça' />
        <Button title='adicionar' />
        <Text style={styles.text}>Veja sua lista de compra!!!</Text>
      </View>
      <View style={styles.content}>

      </View>
    </View>
  );
}
