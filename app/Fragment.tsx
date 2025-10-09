import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Journal from './Journal';

export default function Fragment({ emotion }: { emotion: string }) {
  const [restored, setRestored] = useState(false);
  const [choice, setChoice] = useState<string | null>(null);

  const options = ['silence', 'light', 'echo'];

  return (
    <View>
      {!restored ? (
        <>
          <Text style={{ color: '#aaa', marginBottom: 10 }}>
            “The sky forgot how to...”
          </Text>
          {options.map((word) => (
            <Button key={word} title={word} onPress={() => {
              setChoice(word);
              setRestored(true);
            }} />
          ))}
        </>
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
