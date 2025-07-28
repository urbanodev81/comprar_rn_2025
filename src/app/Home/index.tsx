import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity} from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { styles } from './styles';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]

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
        <View style={styles.header}>
          {FILTER_STATUS.map((status) =>(
              <Filter key={status} status={status} isActive />
            ))}
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Limpar</Text>
            </TouchableOpacity>
          </View>
          <Item data={{ status: FilterStatus.DONE, description: 'Maçã' }} 
            OnStatus={() => console.log("trocar status")}
            OnRemove={() => console.log("remover item")}
          />
      </View>
    </View>
  );
}
