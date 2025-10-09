import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RoomLoader from '../app/RoomLoader';
import CafeStation from '../app/jobs/CafeStation';
import BurgerStation from '../app/jobs/BurgerStation';
import UpgradeShop from '../app/stations/UpgradeShop';
import ShopStation from '../app/stations/ShopStation';
import MemoryVault from '../app/stations/MemoryVault';
import XPTracker from '../app/XPTracker';
import CurrencyEngine from '../app/CurrencyEngine';
import AmbientEngine from '../app/AmbientEngine';
import EchoCompanion from '../app/EchoCompanion'; // ✅ New import

const emotions = ['Sadness', 'Inspiration', 'Numbness', 'Hope'];

export default function TheArchiveHub() {
  const [currentView, setCurrentView] = useState<string | null>(null);
  const [journal, setJournal] = useState<string[]>([]);
  const [xp, setXp] = useState<number>(0);
  const [coins, setCoins] = useState<number>(0);
  const [upgrades, setUpgrades] = useState<string[]>([]);

  const handleFragmentRestore = (entry: string) => {
    setJournal((prev) => [...prev, entry]);
  };

  const handleServe = (entry: string, earnedXp: number) => {
    setJournal((prev) => [...prev, entry]);
    setXp((prev) => prev + earnedXp);
    setCoins((prev) => prev + Math.floor(earnedXp / 2));
  };

  const handlePurchase = (item: string, cost: number) => {
    setCoins((prev) => prev - cost);
    setUpgrades((prev) => [...prev, item]);
    setJournal((prev) => [...prev, `Purchased ${item}`]);
  };

  const handleSell = (entry: string, coinsEarned: number) => {
    setCoins((prev) => prev + coinsEarned);
    setJournal((prev) => [...prev, `Sold fragment: ${entry}`]);
  };

  const handleRemix = (entry: string) => {
    setJournal((prev) => [...prev, entry]);
  };

  const level = Math.floor(xp / 100) + 1;

  return (
    <View style={styles.container}>
      {!currentView ? (
        <>
          <Text style={styles.title}>🌌 The Archive Breathes</Text>
          <Text style={styles.subtitle}>Choose where to go:</Text>
          {emotions.map((emotion) => (
            <Button key={emotion} title={`Room of ${emotion}`} onPress={() => setCurrentView(emotion)} />
          ))}
          <Button title="☕ Enter Cafe Station" onPress={() => setCurrentView('Cafe')} />
          <Button title="🍔 Enter Burger Station" onPress={() => setCurrentView('Burger')} />
          <Button title="🛍️ Visit Upgrade Shop" onPress={() => setCurrentView('Shop')} />
          <Button title="🧾 Sell Fragments" onPress={() => setCurrentView('Sell')} />
          <Button title="🧠 Enter Memory Vault" onPress={() => setCurrentView('Vault')} />
          <XPTracker xp={xp} level={level} />
          <CurrencyEngine coins={coins} />
          <AmbientEngine upgrades={upgrades} />
          <EchoCompanion journalEntries={journal} upgrades={upgrades} emotion={currentView} /> {/* ✅ New companion */}
        </>
      ) : currentView === 'Cafe' ? (
        <CafeStation emotion="Comfort" onServe={handleServe} />
      ) : currentView === 'Burger' ? (
        <BurgerStation emotion="Hope" onServe={handleServe} />
      ) : currentView === 'Shop' ? (
        <UpgradeShop coins={coins} onPurchase={handlePurchase} />
      ) : currentView === 'Sell' ? (
        <ShopStation journalEntries={journal} onSell={handleSell} />
      ) : currentView === 'Vault' ? (
        <MemoryVault journalEntries={journal} onRemix={handleRemix} />
      ) : (
        <RoomLoader
          emotion={currentView}
          journalEntries={journal}
          onFragmentRestore={handleFragmentRestore}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#eee',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 20,
    textAlign: 'center',
  },
});
