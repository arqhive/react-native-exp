import React, {Component} from 'react';
import {View} from 'react-native';
// 컴포넌트는 Flexbox 알고리즘을 사용하여 자식의 레이아웃을 지정할 수 있다.
// Flexbox는 다양한 화면 크기에서 일관된 레이아웃을 제공하도록 설계되었다.

// 일반적으로 flexDirection, alignItems, justifyContent의 조합을 사용한다.
// 웹 Flexbox와 다른 점은 flexDirection의 디폴트 값이 column 이고, flex 파라미터는 하나의 숫자만 지원한다.

// flex
// 항목이 기본 축을 따라 사용 가능한 공간을 어떻게 채우는지 정의한다.
// 공간은 각 컴포넌트의 flex 속성에 따라 나뉜다.

// flexDirection
// 노드의 자식이 배치되는 방향을 제어한다. main-axis 라고도 한다.
// row: 왼쪽에서 오른쪽으로 맞춤. 줄 바꿈이 활성화 되면 컨테이너 왼쪽의 첫 번째 항목 아래에서 다음 줄이 시작
// column: 기본 값 자식을 위에서 아래로 맞춤. 줄 바꿈이 활성화 된경우 상단의 왼쪽 첫번째 항목부터 시작
// row-reverse, column-reverse 동일하지만 역방향

class FlexDirectionBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// 레이아웃 방향은 계층 구조의 자식 및 텍스트가 배치되는 방향을 지정한다.
// 기본적으로 RN은 LTR방향으로 레이아웃이 배치된다.

// justifyContent 주축 설정
// flex-start, flex-end, center, space-between, space-around, space-evenly
// space-evenly: 각 간격 배치는 space-around와 동일하나 양 끝에 배치되는 컴포넌트 사이즈 만큼 간격이 더 생김
class JustifyContentBasics extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// alignItems 교차 축에 적용
// stretch: height와 일치하도록 컨테이너의 자식을 늘린다. (주축의 수치가 고정이면 작동하지 않음)
// flex-start, flex-end, center, baseline
class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// alignSelf
// alignItems와 동일한 효과, 히지만 단일 자식에 적용하여 부모 내의 정렬을 변경 할 수 있다.

// alignContent
// 교차 축을 따라 선의 분포를 정의한다. 여러 줄로 줄 바꿈 한 경우메나 효과가 있다.
// flex-start, flex-end, stretch, center, space-between, space-around

// flexWrap
// 기본적으로 자식은 한 줄로 만들어진다. 줄 바꿈이 허용되면 필요한 경우 기본 항목이 주축을 따라 여러 줄로 바뀐다.
// wrap, nowrap

// flexGrow, flexShrink, flexBasis

// width, height (기본값 'auto')
// pixels(수치는 표기하지 않음), percentage(부모에 상대적)

export {FlexDirectionBasics, JustifyContentBasics, AlignItemsBasics};
