import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import TheArchiveHub from '../main/TheArchiveHub';

export default function AppEntry() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <TheArchiveHub />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>The Archive Breathes</Text>
      <Button title="Log In" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
}
