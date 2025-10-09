import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

type Props = {
  xp: number;
  level?: number;
};

export default function XPTracker({ xp, level = 1 }: Props) {
  const xpForNextLevel = 100;
  const progress = Math.min(xp / xpForNextLevel, 1);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>XP: {xp} / {xpForNextLevel}</Text>
      <ProgressBar progress={progress} color="#6cf" style={styles.bar} />
      <Text style={styles.level}>Level {level}</Text>
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
  label: {
    color: '#ccc',
    marginBottom: 6,
    fontSize: 14,
  },
  bar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  level: {
    color: '#aaa',
    marginTop: 6,
    fontSize: 12,
    textAlign: 'right',
  },
});
