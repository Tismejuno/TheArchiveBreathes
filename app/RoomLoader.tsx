import React from 'react';
import { View, Text } from 'react-native';
import Fragment from './Fragment';
import Solace from './Solace';
import UIOverlay from './UIOverlay';

<UIOverlay journalEntries={["Restored fragment in Sadness: 'silence'"]} />

type Props = {
  emotion: string;
};

export default function RoomLoader({ emotion }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a', padding: 20 }}>
      <Solace emotion={emotion} />
      <Text style={{ fontSize: 24, color: '#ccc', marginBottom: 20 }}>
        Room of {emotion}
      </Text>
      <Fragment emotion={emotion} />
    </View>
  );
}
