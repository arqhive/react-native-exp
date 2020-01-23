import React from 'react';
import {View, Button, Alert} from 'react-native';

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
  const def = () => {
    Alert.alert('Default!'); // 타이틀
  };

  // cancelable이 true이면 알림 상자 외부를 탭하면 상자가 닫힘
  // onDismiss로 닫힌 이벤트 콜백 작성 가능
  const androidAlert = () => {
    Alert.alert(
      '알림창 제목',
      '알림창 메세지',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true, onDismiss: () => alert('cancle')},
    );
  };

  // iOS에서는 옵션이 다 쓸모가 없음 (무시됨)
  const iosAlert = () => {
    Alert.alert('알림창 제목', '알림창 메세지', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed'),
        style: 'default',
      },
    ]);
  };

  return (
    <View style={{marginTop: 100}}>
      <Button title="Default" onPress={def} />
      <View style={{marginTop: 50}} />
      <Button title="Android" onPress={androidAlert} />
      <View style={{marginTop: 50}} />
      <Button title="iOS" onPress={iosAlert} />
    </View>
  );
}
