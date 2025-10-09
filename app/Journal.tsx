import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  entry: string;
};

export default function Journal({ entry }: Props) {
  return (
    <View style={{
      marginTop: 20,
      padding: 12,
      borderLeftWidth: 2,
      borderColor: '#555',
      backgroundColor: '#222',
      borderRadius: 6
    }}>
      <Text style={{ color: '#999', fontSize: 14 }}>📝 Journal Entry</Text>
      <Text style={{ color: '#ccc', fontStyle: 'italic', marginTop: 6 }}>
        {entry}
      </Text>
    </View>
  );
}
