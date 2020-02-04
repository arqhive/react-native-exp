// 전체 하위 트리를 다시 렌더링 하기 위해 state/props 을 사용하지 않고 구성 요소를 직접 변경 하는 경우
// 빈번한 리렌더링으로 인해 성능 병목 현상이 발생하면 setNativeProps를 사용한다.

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class MyButton extends React.Component {
  setNativeProps = nativeProps => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    return (
      <View ref={component => (this._root = component)} {...this.props}>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity>
        <MyButton label="Press me!" />
      </TouchableOpacity>
    );
  }
}
