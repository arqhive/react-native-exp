import React, {Component} from 'react';
import {Text, View} from 'react-native';

// 자신이 만든 컴포넌트에도 props를 사용 할 수 있다.
class Greeting extends Component {
  render() {
    return (
      // View는 스타일과 레이아웃을 제어하는데 주로 사용된다.
      // 다른 컴포넌트의 컨테이너로 유용하다.
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name="Rexar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  }
}
