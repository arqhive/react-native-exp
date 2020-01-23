import React from 'react';
import {View, Button, Clipboard} from 'react-native';

// 기본적인 버튼은 Confirm 버튼만 난옴
// iOS 에서는 버튼을 여러게 지정 할 수 있으며, 각 버튼은 default, cancel, destructive 스타일 중 하나이다.

// Android 에서는 최대 3개의 버튼을 지정할 수 있다.
// Android에는 netural, negative, positive 버튼 개념이 있음
// 하나의 버튼을 지정하면 'Ok'
// 두개의 버튼을 지정하면 'Cancel', 'Ok'
// 세개의 버튼을 지정하면 'Later', 'Cancel', 'Ok'
// 안드로이드에서는 알림 상자 외부를 탭하면 Alert이 해제된다.
// cancelabel: false를 제공하여 해제 동작을 모두 사용하지 않을수도 있다.
// static alert(title, message?, buttons?, options? type?)
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
