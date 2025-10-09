import React from 'react';
import { View, Button } from 'react-native';
import CafeStation from './jobs/CafeStation';
import BurgerStation from './jobs/BurgerStation';
import UpgradeShop from './stations/UpgradeShop';
import ShopStation from './stations/ShopStation';
import MemoryVault from './stations/MemoryVault';
import RoomLoader from './RoomLoader';

type Props = {
  currentView: string | null;
  onReturn: () => void;
  journal: string[];
  upgrades: string[];
  coins: number;
  xp: number;
  onServe: (entry: string, earnedXp: number) => void;
  onPurchase: (item: string, cost: number) => void;
  onSell: (entry: string, coinsEarned: number) => void;
  onRemix: (entry: string) => void;
  onFragmentRestore: (entry: string) => void;
};

export default function ViewRouter(props: Props) {
  const { currentView, onReturn } = props;

  const wrap = (Component: JSX.Element) => (
    <View>
      {Component}
      <Button title="🔙 Return to Hub" onPress={onReturn} />
    </View>
  );

  switch (currentView) {
    case 'Cafe':
      return wrap(<CafeStation emotion="Comfort" onServe={props.onServe} />);
    case 'Burger':
      return wrap(<BurgerStation emotion="Hope" onServe={props.onServe} />);
    case 'Shop':
      return wrap(<UpgradeShop coins={props.coins} onPurchase={props.onPurchase} />);
    case 'Sell':
      return wrap(<ShopStation journalEntries={props.journal} onSell={props.onSell} />);
    case 'Vault':
      return wrap(<MemoryVault journalEntries={props.journal} onRemix={props.onRemix} />);
    default:
      return wrap(
        <RoomLoader
          emotion={currentView}
          journalEntries={props.journal}
          onFragmentRestore={props.onFragmentRestore}
        />
      );
  }
}
