import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  journalEntries: string[];
  upgrades: string[];
};

export default function JournalSkinEngine({ journalEntries, upgrades }: Props) {
  const skin = upgrades.includes('Journal Skin: Nebula')
    ? 'nebula'
    : upgrades.includes('Journal Skin: Ember')
    ? 'ember'
    : 'default';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📓 Journal</Text>
      {journalEntries.map((entry, index) => (
        <Text key={index} style={[styles.entry, skinStyles[skin]]}>
          {entry}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: '#eee',
    marginBottom: 10,
  },
  entry: {
    fontSize: 14,
    marginBottom: 6,
  },
});

const skinStyles = {
  default: {
    color: '#ccc',
  },
  nebula: {
    color: '#aaf',
    fontStyle: 'italic',
  },
  ember: {
    color: '#f88',
    fontWeight: 'bold',
  },
};
