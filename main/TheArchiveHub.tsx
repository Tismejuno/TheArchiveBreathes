import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationPanel from '../app/NavigationPanel';
import StatusPanel from '../app/StatusPanel';
import ViewRouter from '../app/ViewRouter';

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

  const handleReturnToHub = () => {
    setCurrentView(null);
  };

  const level = Math.floor(xp / 100) + 1;
  const emotionalRooms = ['Sadness', 'Inspiration', 'Numbness', 'Hope'];

  return (
    <View style={styles.container}>
      {!currentView ? (
        <>
          <Text style={styles.title}>🌌 The Archive Breathes</Text>
          <NavigationPanel onNavigate={setCurrentView} unlockedRooms={emotionalRooms} />
          <StatusPanel
            xp={xp}
            level={level}
            coins={coins}
            upgrades={upgrades}
            journal={journal}
            emotion={currentView}
          />
        </>
      ) : (
        <ViewRouter
          currentView={currentView}
          onReturn={handleReturnToHub}
          journal={journal}
          upgrades={upgrades}
          coins={coins}
          xp={xp}
          onServe={handleServe}
          onPurchase={handlePurchase}
          onSell={handleSell}
          onRemix={handleRemix}
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
});
