import React from 'react';
import {View, Text, BackHandler} from 'react-native';

// 리스너가 없거나, true를 반환하는 수신기가 없는 경우 기본적으로 앱을 종료한다.
// 이벤트 구독은 역순으로 호출된다. (마지막으로 등록된 구독이 먼저)
// 하나의 구독이 true를 리턴하면 이전에 등록된 구독이 호출되지 않는다.
// Modal이 표시되면 BackHandler는 이벤트를 발생시키지 않는다.
export default function App() {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      alert('백 핸들러');
      // BackHandler.exitApp();
      return true;
    });
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        alert('백 핸들러');
        return true;
      });
  });

  return (
    <View>
      <Text>BackHandler</Text>
    </View>
  );
}
