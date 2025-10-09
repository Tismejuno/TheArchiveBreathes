import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RoomLoader from '../app/RoomLoader';

const emotions = ['Sadness', 'Inspiration', 'Numbness', 'Hope'];

export default function TheArchiveHub() {
  const [currentEmotion, setCurrentEmotion] = useState<string | null>(null);
  const [journal, setJournal] = useState<string[]>([]);

  const handleFragmentRestore = (entry: string) => {
    setJournal((prev) => [...prev, entry]);
  };

  return (
    <View style={styles.container}>
      {!currentEmotion ? (
        <>
          <Text style={styles.title}>🌌 The Archive Breathes</Text>
          <Text style={styles.subtitle}>Choose an emotional room to enter:</Text>
          {emotions.map((emotion) => (
            <Button key={emotion} title={emotion} onPress={() => setCurrentEmotion(emotion)} />
          ))}
        </>
      ) : (
        <RoomLoader
          emotion={currentEmotion}
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
