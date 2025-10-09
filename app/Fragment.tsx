import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Journal from './Journal';
import PuzzleEngine from './PuzzleEngine';

type Props = {
  emotion: string;
};

export default function Fragment({ emotion }: Props) {
  const [restored, setRestored] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <View>
      {!restored ? (
        <PuzzleEngine
          emotion={emotion}
          onSolve={(selectedWord) => {
            setChoice(selectedWord);
            setRestored(true);
          }}
        />
      ) : (
        <>
          <Text style={{ color: '#ccc', marginTop: 20 }}>
            “The sky forgot how to {choice}.”
          </Text>
          <Journal entry={`Restored fragment in ${emotion}: "${choice}"`} />
        </>
      )}
    </View>
  );
}
