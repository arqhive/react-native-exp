import React, {Component} from 'react';
import {View} from 'react-native';

// 컴포넌트의 치수를 설정하는 가장 간단한 방법은 고정된 width 및 height 스타일을 추가하는 것이다.
// 모든 치수는 단위가 없으며 density-independent pixels이다.
// 밀도 독립적 픽셀이란 모든 화면에서 균일한 크기로 확장되는 유연한 장치이다. (dp로 작성)
// 화면 치수와 상관없이 항상 정확히 동일한 크기로 렌더링 해야하는 컴포넌트에 적합하다.
export default class FixedDimensionsBasic extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
