import React, {Component} from 'react';
import {View} from 'react-native';

// 사용 가능한 공간을 기준으로 컴포넌트를 동적으로 확장 및 축소하려면 컴포넌트 스타일에 flex를 사용한다.
export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
