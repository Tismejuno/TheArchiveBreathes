import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  coins: number;
};

export default function CurrencyEngine({ coins }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>🪙 Coins: {coins}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  label: {
    color: '#ffd700',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
