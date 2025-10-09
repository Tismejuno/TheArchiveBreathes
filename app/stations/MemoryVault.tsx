import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  journalEntries: string[];
  onRemix: (entry: string) => void;
};

export default function MemoryVault({ journalEntries, onRemix }: Props) {
  const [remixed, setRemixed] = useState<string[]>([]);

  const handleRemix = (entry: string) => {
    setRemixed((prev) => [...prev, entry]);
    onRemix(`Remixed memory: ${entry}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Memory Vault</Text>
      {journalEntries.length === 0 ? (
        <Text style={styles.empty}>No memories stored yet.</Text>
      ) : (
        journalEntries.map((entry, index) => (
          <Button
            key={index}
            title={`Remix: "${entry}"`}
            onPress={() => handleRemix(entry)}
            disabled={remixed.includes(entry)}
          />
        ))
      )}
      {remixed.length > 0 && (
        <Text style={styles.confirm}>Remixed: {remixed.length} memories</Text>
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
