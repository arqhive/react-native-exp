import React from 'react';
import {View, Button, Clipboard} from 'react-native';

export default function App() {
  const getString = () => {
    Clipboard.getString().then((value, reject) => alert(value, reject));
    // const content = await Clipboard.getString();
  };

  const setString = () => {
    Clipboard.setString('Hello world');
  };

  return (
    <View style={{marginTop: 100}}>
      <Button title="getString" onPress={getString} />
      <Button title="setString" onPress={setString} />
    </View>
  );
}
