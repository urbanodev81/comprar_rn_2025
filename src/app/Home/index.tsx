import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, Button as But} from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { styles } from './styles';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input placeholder='Ex: Maça' />
        <Button title='adicionar' />
        <Text style={styles.text}>Veja sua lista de compraqqq!!!</Text>
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive />  
        <Filter status={FilterStatus.PENDING} isActive={false} />  
      </View>
    </View>
  );
}
