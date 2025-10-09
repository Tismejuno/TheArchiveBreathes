import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Journal from './Journal';

type Props = {
  journalEntries: string[];
};

export default function UIOverlay({ journalEntries }: Props) {
  const [showJournal, setShowJournal] = useState(false);
  const [ambientOn, setAmbientOn] = useState(true);

  return (
    <View style={styles.overlay}>
      {/* Ambient Toggle */}
      <TouchableOpacity onPress={() => setAmbientOn(!ambientOn)} style={styles.button}>
        <Text style={styles.buttonText}>
          Ambient: {ambientOn ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>

      {/* Journal Access */}
      <TouchableOpacity onPress={() => setShowJournal(true)} style={styles.button}>
        <Text style={styles.buttonText}>Open Journal</Text>
      </TouchableOpacity>

      {/* Emotional Summary (Placeholder) */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Emotional Summary</Text>
      </TouchableOpacity>

      {/* Journal Modal */}
      <Modal visible={showJournal} animationType="fade" transparent={true}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>📝 Journal</Text>
            {journalEntries.map((entry, index) => (
              <Journal key={index} entry={entry} />
            ))}
            <TouchableOpacity onPress={() => setShowJournal(false)} style={styles.closeButton}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'flex-end',
    zIndex: 100,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ccc',
    fontSize: 14,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(10,10,10,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    color: '#eee',
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 6,
    alignSelf: 'center',
  },
});
