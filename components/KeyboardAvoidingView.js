import React from 'react';
import {KeyboardAvoidingView, TextInput} from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: 'green'}}
      behavior="padding" // 동작 방식 "height", "position", "padding" Android에서는 해당 prop이 없는게 더 잘 동작하지만 iOS에서는 반대
      // contentContainerStyle // behavior="position" 일때 컨텐트 컨테이너 스타일
      enabled={true} // default true
      keyboardVerticalOffset={10} // default 0
    >
      <TextInput style={{marginTop: 100, borderWidth: 2, borderColor: 'red'}} />
    </KeyboardAvoidingView>
  );
}
