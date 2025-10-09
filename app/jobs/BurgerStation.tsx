import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  emotion: string;
  onServe: (entry: string, xp: number) => void;
};

export default function BurgerStation({ emotion, onServe }: Props) {
  const [served, setServed] = useState(false);
  const [burger, setBurger] = useState<string | null>(null);

  const burgers = ['Resilience Stack', 'Hope Melt', 'Echo Patty'];

  const handleServe = (selected: string) => {
    setBurger(selected);
    setServed(true);
    const entry = `Grilled ${selected} in ${emotion}`;
    const xp = 15; // Slightly higher reward than Cafe
    onServe(entry, xp);
  };

  return (
    <View style={styles.container}>
      {!served ? (
        <>
          <Text style={styles.prompt}>Choose a burger to grill:</Text>
          {burgers.map((b) => (
            <Button key={b} title={b} onPress={() => handleServe(b)} />
          ))}
        </>
      ) : (
        <Text style={styles.served}>You grilled {burger} in {emotion}.</Text>
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
