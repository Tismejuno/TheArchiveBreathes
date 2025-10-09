import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  emotion: string;
  onServe: (entry: string, xp: number) => void;
};

export default function CafeStation({ emotion, onServe }: Props) {
  const [served, setServed] = useState(false);
  const [drink, setDrink] = useState<string | null>(null);

  const drinks = ['Comfort Brew', 'Echo Shot', 'Light Roast'];

  const handleServe = (selected: string) => {
    setDrink(selected);
    setServed(true);
    const entry = `Served ${selected} in ${emotion}`;
    const xp = 10; // You can vary XP per drink later
    onServe(entry, xp);
  };

  return (
    <View style={styles.container}>
      {!served ? (
        <>
          <Text style={styles.prompt}>Choose a drink to serve:</Text>
          {drinks.map((d) => (
            <Button key={d} title={d} onPress={() => handleServe(d)} />
          ))}
        </>
      ) : (
        <Text style={styles.served}>You served {drink} in {emotion}.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#222',
    borderRadius: 8,
  },
  prompt: {
    color: '#aaa',
    marginBottom: 10,
    fontSize: 16,
  },
  served: {
    color: '#ccc',
    fontStyle: 'italic',
    marginTop: 10,
    fontSize: 16,
  },
});
