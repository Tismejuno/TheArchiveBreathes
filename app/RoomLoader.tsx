import React from 'react';
import { View, Text } from 'react-native';
import Fragment from './Fragment';
import Solace from './Solace';
import UIOverlay from './UIOverlay';
import Transition from './Transition'; // Optional: for cinematic fade-in
import MemoryEcho from './MemoryEcho'; // New: for emotional reflection

type Props = {
  emotion: string;
};

export default function RoomLoader({ emotion }: Props) {
  const journalEntries = [`Restored fragment in ${emotion}: 'silence'`];

  return (
    <Transition>
      <View style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 20 }}>
        <Solace emotion={emotion} />
        <Text style={{ fontSize: 24, color: '#ccc', marginBottom: 20 }}>
          Room of {emotion}
        </Text>
        <Fragment emotion={emotion} />
        <MemoryEcho entries={journalEntries} />
        <UIOverlay journalEntries={journalEntries} />
      </View>
    </Transition>
  );
}
