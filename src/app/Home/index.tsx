import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { styles } from './styles';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';
import { useState } from 'react';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING]

// const ITENS = Array.from({ length: 100 }).map((_, index) => index);
// const ITENS = [
//   { id: 1, status: FilterStatus.DONE, description: 'Maçã'},
//   { id: 2, status: FilterStatus.PENDING, description: 'Banana'},
//   { id: 3, status: FilterStatus.DONE, description: 'Laranja'},
//   { id: 4, status: FilterStatus.PENDING, description: 'Abacaxi'},
//   { id: 5, status: FilterStatus.DONE, description: 'Uva'},
//   { id: 6, status: FilterStatus.PENDING, description: 'Manga'},
//   { id: 7, status: FilterStatus.DONE, description: 'Pera'},
//   { id: 8, status: FilterStatus.PENDING, description: 'Kiwi'},
//   { id: 9, status: FilterStatus.DONE, description: 'Cereja'},
//   { id: 10, status: FilterStatus.PENDING, description: 'Melancia'},
//   { id: 11, status: FilterStatus.DONE, description: 'Abacate'},
//   { id: 12, status: FilterStatus.PENDING, description: 'Limão'},
//   { id: 13, status: FilterStatus.DONE, description: 'Coco'},
//   { id: 14, status: FilterStatus.PENDING, description: 'Mamão'},
//   { id: 15, status: FilterStatus.DONE, description: 'Framboesa'},
// ]

export default function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.DONE);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState<any>([]);

 function handleAdd() {
    if(!description.trim())
      Alert.alert("Adicionar Item", "informe a descrição do item para adicionar à lista");
    }

    const newItem = {
      id: Math.random(),
      status: FilterStatus.PENDING,
      description
    };

    setItems((prevState) => [...prevState, newItem]);


  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />
      <View style={styles.form}>
        <Input 
          placeholder="Ex: Maça"
          onChangeText={setDescription}
        />
        <Button title='adicionar' onPress={handleAdd} />
        <Text style={styles.text}>Veja sua lista dsse compra!!!</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) =>(
              <Filter 
                key={status} 
                status={status} 
                isActive={status === filter}
                onPress={() => setFilter(status)}
                />
            ))}
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Limparw</Text>
            </TouchableOpacity>
        </View>
          
        {/* <ScrollView>
            {Array.from({ length: 100 }).map((value_, index) => {
              console.log(value_, index)
              return (
                <Item data={{ status: FilterStatus.DONE, description: 'Maçã' }} 
                  OnStatus={() => console.log("trocar status")}
                  OnRemove={() => console.log("remover item")}
                />
              )
            })}
          </ScrollView> */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item 
              // data={{ status: item.status, description: item.description }} 
              data={item} 
              OnStatus={() => console.log("trocar status")}
              OnRemove={() => console.log("remover item")}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.flatListContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item encontrado</Text>
          )}
        />
      </View>
    </View>
  );
}
 