import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  journalEntries: string[];
  onSell: (entry: string, coinsEarned: number) => void;
};

export default function ShopStation({ journalEntries, onSell }: Props) {
  const [soldEntries, setSoldEntries] = useState<string[]>([]);

  const handleSell = (entry: string) => {
    const coinsEarned = 5 + entry.length % 10; // poetic weight = value
    setSoldEntries((prev) => [...prev, entry]);
    onSell(entry, coinsEarned);
  };

  const unsold = journalEntries.filter((entry) => !soldEntries.includes(entry));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧾 Memory Market</Text>
      {unsold.length === 0 ? (
        <Text style={styles.empty}>No unsold fragments left.</Text>
      ) : (
        unsold.map((entry, index) => (
          <Button
            key={index}
            title={`Sell: "${entry}"`}
            onPress={() => handleSell(entry)}
          />
        ))
      )}
      {soldEntries.length > 0 && (
        <Text style={styles.confirm}>Sold: {soldEntries.length} fragments</Text>
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
  title: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 10,
  },
  empty: {
    color: '#888',
    fontStyle: 'italic',
  },
  confirm: {
    color: '#ccc',
    marginTop: 10,
    fontStyle: 'italic',
  },
});
