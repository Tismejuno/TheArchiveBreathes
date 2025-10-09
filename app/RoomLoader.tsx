import React from 'react';
import { View, Text } from 'react-native';
import Fragment from './Fragment';
import Solace from './Solace';
import UIOverlay from './UIOverlay';
import Transition from './Transition';
import MemoryEcho from './MemoryEcho';

type Props = {
  emotion: string;
  journalEntries: string[];
  onFragmentRestore: (entry: string) => void;
};

export default function RoomLoader({ emotion, journalEntries, onFragmentRestore }: Props) {
  return (
    <Transition>
      <View style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 20 }}>
        <Solace emotion={emotion} />
        <Text style={{ fontSize: 24, color: '#ccc', marginBottom: 20 }}>
          Room of {emotion}
        </Text>
        <Fragment emotion={emotion} onRestore={onFragmentRestore} />
        <MemoryEcho entries={journalEntries} />
        <UIOverlay journalEntries={journalEntries} />
      </View>
    </Transition>
  );
}
