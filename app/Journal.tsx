import { View, Text } from 'react-native';

export default function Journal({ entry }: { entry: string }) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ color: '#999' }}>📝 Journal Entry:</Text>
      <Text style={{ color: '#ccc', fontStyle: 'italic' }}>{entry}</Text>
    </View>
  );
}
