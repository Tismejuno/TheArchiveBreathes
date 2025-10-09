import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  emotion: string;
  onSolve: (choice: string) => void;
};

export default function PuzzleEngine({ emotion, onSolve }: Props) {
  const [solved, setSolved] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  const options: Record<string, string[]> = {
    Sadness: ['silence', 'light', 'echo'],
    Inspiration: ['spark', 'voice', 'color'],
    Numbness: ['stillness', 'weight', 'pause'],
    Hope: ['rise', 'reach', 'shine'],
  };

  const words = options[emotion] || ['echo'];

  return (
    <View>
      {!solved ? (
        <>
          <Text style={{ color: '#aaa', marginBottom: 10 }}>
            “The sky forgot how to...”
          </Text>
          {words.map((word) => (
            <Button
              key={word}
              title={word}
              onPress={() => {
                setChoice(word);
                setSolved(true);
                onSolve(word);
              }}
            />
          ))}
        </>
      ) : (
        <Text style={{ color: '#ccc', marginTop: 20 }}>
          “The sky forgot how to {choice}.”
        </Text>
      )}
    </View>
  );
}
