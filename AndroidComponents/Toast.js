import React from 'react';
import {View, Button, ToastAndroid} from 'react-native';

// duration: ToastAndroid.SHORT, ToastAndroid.LONG
// layout gravity: TOP, CENTER, BOTTOM
export default function App() {
  const show = () => {
    ToastAndroid.show('뿅!', ToastAndroid.LONG);
  };

  const showWithGravity = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <View style={{marginTop: 100}}>
      <Button title="SHOW!" onPress={show} />
      <Button title="With Gravity" onPress={showWithGravity} />
      <Button
        title="With Gravity And Offset"
        onPress={showWithGravityAndOffset}
      />
    </View>
  );
}
