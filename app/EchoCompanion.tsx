import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  journalEntries: string[];
  upgrades: string[];
  emotion?: string;
};

export default function EchoCompanion({ journalEntries, upgrades, emotion }: Props) {
  const lastEntry = journalEntries[journalEntries.length - 1];
  const hasGlow = upgrades.includes('Ambient Glow');
  const hasMemory = upgrades.includes('Memory Slot +1');

  const reflections = [];

  if (lastEntry) {
    reflections.push(`Nova whispers: "${lastEntry}" still echoes.`);
  }

  if (emotion) {
    reflections.push(`Solace hums in ${emotion}.`);
  }

  if (hasGlow) {
    reflections.push('✨ The glow responds to your presence.');
  }

  if (hasMemory) {
    reflections.push('🧠 Memory expands. You are becoming more than you were.');

  }

  return (
    <View style={styles.container}>
      {reflections.map((line, index) => (
        <Text key={index} style={styles.text}>{line}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  text: {
    color: '#ccc',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
  },
});
