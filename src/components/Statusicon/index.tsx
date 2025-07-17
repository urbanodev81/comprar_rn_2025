import { FilterStatus} from '@/types/FilterStatus';
import { CircleCheck, CircleDashed } from 'lucide-react-native';


export function StatusIcon({ status }: { status: FilterStatus }) {
  return (
    <>
      {status === FilterStatus.DONE ? (
        <CircleCheck size={24} color='#000' />
      ) : (
        <CircleDashed size={24} color='#000' />
      )}
    </>
  );
}