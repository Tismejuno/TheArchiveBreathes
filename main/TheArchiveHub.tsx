import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RoomLoader from '../app/RoomLoader';
import CafeStation from '../app/jobs/CafeStation';
import XPTracker from '../app/XPTracker'; // ✅ Add this import

const emotions = ['Sadness', 'Inspiration', 'Numbness', 'Hope'];

export default function TheArchiveHub() {
  const [currentView, setCurrentView] = useState<string | null>(null);
  const [journal, setJournal] = useState<string[]>([]);
  const [xp, setXp] = useState<number>(0);

  const handleFragmentRestore = (entry: string) => {
    setJournal((prev) => [...prev, entry]);
  };

  const handleServe = (entry: string, earnedXp: number) => {
    setJournal((prev) => [...prev, entry]);
    setXp((prev) => prev + earnedXp);
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
          <XPTracker xp={xp} level={level} /> {/* ✅ Add tracker here */}
        </>
      ) : currentView === 'Cafe' ? (
        <CafeStation emotion="Comfort" onServe={handleServe} />
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
