import React from 'react';
import {Picker} from 'react-native';

export default function App() {
  const [value, setValue] = React.useState('js');
  return (
    <Picker
      selectedValue={value} // 현재 선택 값
      onValueChange={(value, position) => setValue(value)} // position -> item index
      style={{color: 'red', marginTop: 100}} // iOS는 안바뀜, Android는 현재 선택값 색이 바뀜
      testID="testID"
      enabled={true} // Android Only
      mode="dropdown" // Android Only "dropdown", "dialog" (별 차이를 모르겠음)
      prompt="선택해 주세요!" // Android Only. 모달 타이틀 출력 안됨
      itemStyle={{color: 'red', fontSize: 20, padding: 50}} // iOS Only 적용 안되는거 같음
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
}

// style
// View Style Props... + color
