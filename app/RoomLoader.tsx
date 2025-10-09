import { View, Text } from 'react-native';
import Fragment from './Fragment';
import Solace from './Solace';

export default function RoomLoader({ emotion }: { emotion: string }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 20 }}>
      <Solace emotion={emotion} />
      <Text style={{ fontSize: 24, color: '#ccc', marginBottom: 20 }}>
        Room of {emotion}
      </Text>
      <Fragment emotion={emotion} />
    </View>
  );
}
