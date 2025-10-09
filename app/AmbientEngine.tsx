import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  upgrades: string[];
  emotion?: string;
};

export default function AmbientEngine({ upgrades, emotion }: Props) {
  const effects = [];

  if (upgrades.includes('Ambient Glow')) {
    effects.push('✨ Glow active');
  }
  if (upgrades.includes('Journal Skin: Nebula')) {
    effects.push('📓 Nebula journal skin applied');
  }
  if (upgrades.includes('Memory Slot +1')) {
    effects.push('🧠 Extra memory slot unlocked');
  }

  return (
    <View style={styles.container}>
      {emotion && <Text style={styles.emotion}>Emotion: {emotion}</Text>}
      {effects.map((effect, index) => (
        <Text key={index} style={styles.effect}>{effect}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#111',
    borderRadius: 6,
  },
  emotion: {
    color: '#6cf',
    fontSize: 14,
    marginBottom: 6,
  },
  effect: {
    color: '#ccc',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
