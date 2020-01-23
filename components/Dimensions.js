import React from 'react';
import {View, Text, Dimensions} from 'react-native';

export default function App() {
  React.useEffect(() => {
    Dimensions.addEventListener('change', () => alert('Dimensions Change!'));
    return () =>
      Dimensions.removeEventListener('change', () =>
        alert('Dimensions Change!'),
      );
  });

  // runApplication이 호출 되기 전에 설정 된다.
  // 즉시 사용할 수 있지만 장치 회전 등으로 변경 될 수 있으므로
  // 해당 상수의 의존하는 렌더링 논리 또는 스타일은 값을 캐싱하지 않고 모든 렌더에서
  // 아래의 함수를 호출해야 한다.
  // Android에서는 윈도우 값은 상태 표시줄과 하단 탐색바에서 사용된 크기를 제외한다.
  const windowValue = Dimensions.get('window'); // scale, width, height, fontScale

  const screenValue = Dimensions.get('screen'); // scale, width, height, fontScale

  return (
    <View style={{marginTop: 100}}>
      <Text>{JSON.stringify(windowValue)}</Text>
      <Text>{JSON.stringify(screenValue)}</Text>
    </View>
  );
}
