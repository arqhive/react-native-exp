import React from 'react';
import {View, Switch} from 'react-native';

export default function App() {
  const [value, setValue] = React.useState(false);
  return (
    <View style={{marginTop: 100}}>
      <Switch
        // disabled
        value={value}
        ios_backgroundColor="blue" // 스위치 값이 false 이거나 스위치가 비활성화 되어있을때 나타남
        onChange={e => console.log('값이 바뀔때 호출됨!')}
        onValueChange={setValue} // 바뀌는 값만 콜백 핸들러로 전송됨
        thumbColor="red" // 스위치 그립 색상, iOS에서는 그립의 그림자가 사라짐
        trackColor={{false: 'yellow', true: 'blue'}} // iOS는 false 값은 ios_backgroundColor
      />
    </View>
  );
}
