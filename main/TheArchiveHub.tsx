import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import RoomLoader from '../app/RoomLoader';

export default function TheArchiveHub() {
  const [enteredRoom, setEnteredRoom] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {enteredRoom ? (
        <RoomLoader emotion="Sadness" />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome to The Archive Hub</Text>
          <Button title="Enter Room of Sadness" onPress={() => setEnteredRoom(true)} />
        </View>
      )}
    </View>
  );
}
