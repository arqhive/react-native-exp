import React, {useEffect} from 'react';
import {View, Button, Linking} from 'react-native';

// 딥 링크 설명은 https://facebook.github.io/react-native/docs/linking 참고
export default function App() {
  const linkToGoogle = () => {
    Linking.openURL('https://google.com').catch(e => console.error(e));
  };

  // 확인 후 여는 방법이 좋음
  // iOS 9부터는 LSApplicationQueriesSchemes 이 info.plist에 제공되어야 함 그렇지 않으면 항상 false
  const canOpenUrl = () => {
    Linking.canOpenURL('https://google.com')
      .then(supported => {
        // alert(supported); // boolean
        if (supported) {
          return Linking.openURL('https://google.com');
        } else {
          console.error("Can't open url");
        }
      })
      .catch(e => console.error(e));
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  // 딥 링크에 의해 트리거 된 경우 URL을 제공 (설정 필요)
  React.useEffect(() => {
    // addEventListener, removeEventListener로 컨트롤
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          alert('Initial url is: ' + url);
        }
      })
      .catch(err => alert('An error occurred', err));
  });

  // Android Only
  // Linking.sendIntent(action: string, extras?: Array<{key: string, value: string | number | boolean}>)

  return (
    <View style={{marginTop: 100}}>
      <Button title="Link to google" onPress={linkToGoogle} />
      <Button title="Can open url" onPress={canOpenUrl} />
      <Button title="Open settings" onPress={openSettings} />
    </View>
  );
}
