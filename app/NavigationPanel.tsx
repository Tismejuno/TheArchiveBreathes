import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

type Props = {
  onNavigate: (view: string) => void;
  unlockedRooms: string[];
};

export default function NavigationPanel({ onNavigate, unlockedRooms }: Props) {
  return (
    <View style={styles.panel}>
      {unlockedRooms.map((room) => (
        <Button key={room} title={`Room of ${room}`} onPress={() => onNavigate(room)} />
      ))}
      <Button title="☕ Cafe" onPress={() => onNavigate('Cafe')} />
      <Button title="🍔 Burger" onPress={() => onNavigate('Burger')} />
      <Button title="🛍️ Shop" onPress={() => onNavigate('Shop')} />
      <Button title="🧾 Sell" onPress={() => onNavigate('Sell')} />
      <Button title="🧠 Vault" onPress={() => onNavigate('Vault')} />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    marginBottom: 20,
    gap: 6,
  },
});
