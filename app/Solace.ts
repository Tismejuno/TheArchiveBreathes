import { Text } from 'react-native';

export default function Solace({ emotion }: { emotion: string }) {
  const lines: Record<string, string> = {
    Sadness: 'Sometimes, even silence has weight.',
    Inspiration: 'A spark doesn’t ask permission to shine.',
    Numbness: 'Stillness is not absence—it’s waiting.',
    Hope: 'Even shadows stretch toward light.',
  };

  return (
    <Text style={{ color: '#888', fontStyle: 'italic', marginBottom: 20 }}>
      {lines[emotion] || 'The Archive listens.'}
    </Text>
  );
}
