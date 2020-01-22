import React, {Component} from 'react';
import {Text, View} from 'react-native';

// 기본적인 컴포넌트
export default class HelloWorldApp extends Component {
  // render() 는 JSX를 렌더링 하는 함수이다.
  render() {
    return (
      // JavaScript 내에 XML을 포함시키기 위한 구문인 JSX
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
