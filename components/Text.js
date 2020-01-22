// 텍스트를 출력하기 위한 컴포넌트
// 네스팅, 스타일링, 터치 핸들링 지원

import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

// 단일 fontFamily만 가질 수 있으므로 별도의 범용 텍스트 컴포넌트를 만들고 사용하는 것이 좋다.
// 일부 접근성 props을 가진다. onMoveShouldSetResponder, onResponderGrant 등 View 동일한 부분 있음

// dataDectorType -> 요소를 클릭 가능한 URL로 변환할 데이터 유형을 결정한다. 기본적으로 감지되지 않는다. Android Only
// phoneNumber, link, email, none, all

// ellipsizeMode -> dataDectorType이 설정되어 있으면 자동으로 clip 기본값은 tail
// head, middle, tail, clip

// 중첩된 텍스트 요소는 numberOfLines를 지원하지 않음
class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: 'This is not really a bird nest.',
    };
  }

  render() {
    // 중첩된 텍스트들은 baseText의 fontFamily를 상속받는다.
    return (
      <Text
        style={styles.baseText}
        adjustsFontSizeToFit={false} // 지정된 스타일 제약 조건에 맞게 글꼴을 자동으로 축소해야 하는지 여부 iOS Only
        allowFontScaling={false} // 텍스트 크기 접근성 설정을 고려하여 크기를 조정할지 여부 기본 true
        // dataDetectorType="email" // Android Only
        // disabled={true} // 테스트 목적으로 비활성된 상태 지정 Android Only
        numberOfLines={1} // 텍스트 레이아웃을 계산한 후 텍스트가 이 레이아웃을 초과하지 않도록 한다.
        ellipsizeMode="tail"
        maxFontSizeMultiplier={0} // allowFontScaling인 경우 글꼴이 도달 할 수 있는 가장 큰 배율 기본 null/undefined
        minimumFontScale={0.01} // adjustsFontSizeToFit인 경우 가장 작은 크기 지정 (0.01 - 1.0)
        nativeID="네이티브 코드에서 해당 뷰를 찾는데 사용"
        onLayout={e => console.log('마운트 및 레이아웃 변경시 호출!')}
        // onLongPress={() => alert('길게 누르면 호출!')}
        // onPress={() => alert('누름!')}
        pressRetentionOffset={{top: 10, right: 10, left: 10, bototm: 10}} // 무슨 소린지 잘 이해가 안됨
        selectable={true} // 사용자가 텍스트를 선택할 수 있는지 여부 기본 false iOS랑 Android랑 선택하는 방법이 조금 다름 (width 중요)
        selectionColor="red" // 텍스트 선택 강조 색상 Android Only
        suppressHighlighting={false} // true이면 프레스 다운일때 비쥬얼이 표시되지 않음 iOS Only
        testID="testID"
        textBreakStrategy="highQuality" // Android Only 기본값 highQuality -> simple, balanced, highQuality 23+ 버전 부터
      >
        hgystation@gmail.com
      </Text>
    );
  }
}

// View style 포함
const styles = StyleSheet.create({
  baseText: {
    textShadowColor: 'red',
    textShadowRadius: 10,
    textShadowOffset: {width: 10, height: 10},
    color: 'blue',
    fontSize: 20,
    fontStyle: 'italic', // 'normal'
    fontWeight: 'bold', // 'normal', '100' ~ '900'
    lineHeight: 30,
    textAlign: 'auto', // 'left', 'right', 'center', 'justify'
    textDecorationLine: 'underline', // 'none', 'line-through', 'underline line-through'
    fontFamily: 'Cochin',
    includeFontPadding: false, // Android Only. default true. false로 하면 추가 글꼴 패딩을 제거한다.
    textAlignVertical: 'center', // Android Only. includeFontPadding과 궁합이 좋다. // 'auto', 'top', 'bottom'
    letterSpacing: 5, // default 0. Android 5.0부터 지원. iOS는 문자 사이에 추가 공간이 렌더링
    textDecorationColor: 'red', // iOS Only
    textDecorationStyle: 'dotted', // iOS Only 'solid', 'double', 'dashed'
    textTransform: 'capitalize', // 'none', 'uppercase', 'lowercase'
    writingDirection: 'rtl', // iOS Only 'auto', 'ltr' ,'rtl'
    marginTop: 150,
  },
});

export {TextInANest};
