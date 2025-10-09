import React from 'react';
import { View, Text } from 'react-native';

export default function Solace({ emotion }: { emotion: string }) {
  const lines: Record<string, string> = {
    Sadness: 'Sometimes, even silence has weight.',
    Inspiration: 'A spark doesn’t ask permission to shine.',
    Numbness: 'Stillness is not absence—it’s waiting.',
    Hope: 'Even shadows stretch toward light.',
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: '#888', fontStyle: 'italic' }}>
        {lines[emotion] || 'The Archive listens.'}
      </Text>
    </View>
  );
}
