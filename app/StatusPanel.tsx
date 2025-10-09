import React from 'react';
import { View } from 'react-native';
import XPTracker from './XPTracker';
import CurrencyEngine from './CurrencyEngine';
import AmbientEngine from './AmbientEngine';
import EchoCompanion from './EchoCompanion';
import JournalSkinEngine from './JournalSkinEngine';

type Props = {
  xp: number;
  level: number;
  coins: number;
  upgrades: string[];
  journal: string[];
  emotion: string | null;
};

export default function StatusPanel({ xp, level, coins, upgrades, journal, emotion }: Props) {
  return (
    <View>
      <XPTracker xp={xp} level={level} />
      <CurrencyEngine coins={coins} />
      <AmbientEngine upgrades={upgrades} />
      <EchoCompanion journalEntries={journal} upgrades={upgrades} emotion={emotion} />
      <JournalSkinEngine journalEntries={journal} upgrades={upgrades} />
    </View>
  );
}
