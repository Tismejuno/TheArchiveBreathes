import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type Props = {
  coins: number;
  onPurchase: (item: string, cost: number) => void;
};

const upgrades = [
  { name: 'Ambient Glow', cost: 10 },
  { name: 'Journal Skin: Nebula', cost: 15 },
  { name: 'Memory Slot +1', cost: 20 },
];

export default function UpgradeShop({ coins, onPurchase }: Props) {
  const [purchased, setPurchased] = useState<string[]>([]);

  const handleBuy = (item: string, cost: number) => {
    if (coins >= cost) {
      setPurchased((prev) => [...prev, item]);
      onPurchase(item, cost);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Upgrade Shop</Text>
      <Text style={styles.coins}>Coins: {coins}</Text>
      {upgrades.map(({ name, cost }) => (
        <Button
          key={name}
          title={`${name} (${cost}🪙)`}
          onPress={() => handleBuy(name, cost)}
          disabled={coins < cost || purchased.includes(name)}
        />
      ))}
      {purchased.length > 0 && (
        <Text style={styles.confirm}>Purchased: {purchased.join(', ')}</Text>
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
  coins: {
    color: '#ffd700',
    marginBottom: 10,
  },
  confirm: {
    color: '#ccc',
    marginTop: 10,
    fontStyle: 'italic',
  },
});
