import AsyncStorage from '@react-native-async-storage/async-storage';
import { FilterStatus } from '@/types/FilterStatus';

const ITENS_STORAGE_KEY = '@comprar:items';

export type ItemStorage = {
    id: string;
    description: string;
    status: FilterStatus;
}

async function get(): Promise<ItemStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(ITENS_STORAGE_KEY);
        return storage ? JSON.parse(storage) : [];
    } catch (error) {
        throw new Error("ITEMS_GET: " + error);  
//        console.error("Error fetching items from storage:", error);
//        return [];
    }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
    try {
        const items = await get();
        return items.filter(item => item.status === status);
    } catch (error) {
        console.error("Error fetching items by status:", error);
        return [];
    }
    
}

async function save(items: ItemStorage[]): Promise<void> {
    try {
        await AsyncStorage.setItem(ITENS_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
     throw new Error("ITEMS_SAVE " + error);
    }
}

async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
    try {
        const items = await get();
        const updatedItems = [...items, newItem];
        await save(updatedItems);

        return updatedItems;
    } catch (error) {
        throw new Error("ITEMS_ADD " + error);
    }
}

export const itemsStorage = {
   get,
   getByStatus,
   add
}