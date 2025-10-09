import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  entries: string[];
};

export default function MemoryEcho({ entries }: Props) {
  if (entries.length === 0) return null;

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ color: '#999', fontSize: 14, marginBottom: 6 }}>
        🧠 Echoes from the Archive
      </Text>
      {entries.map((entry, index) => (
        <Text key={index} style={{ color: '#bbb', fontStyle: 'italic', marginBottom: 4 }}>
          {entry}
        </Text>
      ))}
    </View>
  );
}
