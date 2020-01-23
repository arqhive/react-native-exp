import React from 'react';
import {View, StatusBar, Text} from 'react-native';

// 'dark-content'는 Android는 API 23이상
// 'default'는 iOS는 dark Android는 light
export default function App() {
  // Android Only
  const currentHeight = StatusBar.currentHeight;

  // 정적 API를 사용할수도 있음, 다음 렌더링때는 모두 사라짐
  // setTranslucent(), setNetworkActivityIndicatorVisible() ...

  // 중첩된 스택 엔트리 제어
  // popStackEntry(), pushStackEntry(), replaceStackEntry()

  return (
    <View style={{margiTop: 200}}>
      <StatusBar
        animated={true} // 상태 표시줄 전환간 애니메이션 backgroudnColor, barStyle, hidden 지원
        backgroundColor="powderblue" // Android Only
        barStyle="dark-content" // 'default', 'light-content', 'dark-content'
        hidden={false} // 숨김
        networkActivityIndicatorVisible={true} // iOS Only 네트워크 활동 표시기
        showHideTransition="fade" // iOS Only hidden시 애니메이션 'fade', 'slide'
        // translucent={true} // Android Only 앱이 상태표시줄 부터 표시됨 (상태 표시줄이 zIndex더 높음)
      />
      <Text>{currentHeight}</Text>
    </View>
  );
}
