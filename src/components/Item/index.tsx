import { TouchableOpacity, Text, View } from "react-native"
import { styles } from "./styles"
import { Trash2 } from "lucide-react-native"
import { StatusIcon } from "../Statusicon"
import { FilterStatus } from "@/types/FilterStatus"

type ItemData = {
    status: FilterStatus,
    description: string,
}

type Props = {
    data: ItemData,
    OnRemove: () => void,
    OnStatus: () => void,
}
export function Item({ data, OnStatus, OnRemove }: Props) {
    return (
        <View style = {styles.container} >
            <TouchableOpacity activeOpacity={0.8} onPress={OnStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>
            <Text  style={styles.description}>
                {data.description}
            </Text>
            <TouchableOpacity onPress={OnRemove}>
                <Trash2 size={18} color="#828282" />
            </TouchableOpacity>
        </View>
    )
}