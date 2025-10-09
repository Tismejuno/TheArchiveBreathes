import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  emotion: string;
};

export default function Solace({ emotion }: Props) {
  const lines: Record<string, string> = {
    Sadness: 'Sometimes, even silence has weight.',
    Inspiration: 'A spark doesn’t ask permission to shine.',
    Numbness: 'Stillness is not absence—it’s waiting.',
    Hope: 'Even shadows stretch toward light.',
  };

  const line = lines[emotion] || 'The Archive listens.';

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: '#888', fontStyle: 'italic' }}>{line}</Text>
    </View>
  );
}
