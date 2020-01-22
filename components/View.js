import React, {Component} from 'react';
import {View, Text} from 'react-native';

// View는 UI구축을 위한 가장 기본적인 컴포넌트다.
// flexbox, style, touch 처리, 접근성 컨트롤 등을 지원하는 컨테이너 이다.
// View는 다른 View 안에 중첩되도록 설계 되었고 모든 유형의 자식을 0개 이상 가질 수 있다.
// e.nativeEvent (changedTouches, identifier, locationX, locationY, pageX, pageY, target, timestamp, touches)

// accessibilityRole: none, button, link, search, image, keyboardkey, text, adjustable, imagebutton, header, summary, alert, checkbox
// combobox, menu, menubar, menuitem, progressbar, radio, radiogroup, scrollbar, spinbuton, switch, tab, tablist, timer, toolbar

// accessibilityLiveRegion: none, polite, assertive
// importantForAccessibility: auto, yes, no, no-hide-descendants

// hitSlop: 터치 이벤트가 뷰에서 얼마나 멀리서 시작할 수 있는지를 정의한다. 일반적인 인터페이스 지침에서는 밀도 독립적인 픽셀당 30~40 포인트 이상의 터치 대상을 권장한다.
// 터치 가능한 뷰의 높이가 20인 경우 터치 가능한 높이는 hitSlop={{ top: 10, bottom: 10, left: 0, right: 0}}
// hitSlop이 겹치면 zIndex가 우선시 된다.

// pointerEvents -> auto, none, box-none 터치 이벤트의 대상이 될 수 있는지 여부를 제어 한다.

class ViewColoredBoxesWithText extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}
        onStartShouldSetResponder={e =>
          console.log('이 View가 터치 시작시 응답자가 되길 원합니다!', e)
        }
        accessible={true} // 해당 View가 접근성 요소임을 나타낸다. 기본적으로 모든 터치 가능한 요소에 접근 할 수 있다.
        accessibilityLabel="사용자가 요소와 인터랙션 할때 스크린 리더가 읽는 텍스트를 재정의 한다."
        accessibilityHint="accessibilityLabel 결과가 명확하지 않은 경우 접근성 요소에 대한 작업을 수행 할 때 발생하는 상황을 사용자가 이해하도록 도와준다."
        accessibilityRole="none" // 보조 기술 사용자에게 컴포넌트의 목적을 알려준다.
        accessibilityState={{
          disabled: false,
          selected: false,
          checked: false,
          busy: false,
          expanded: false,
        }} // 보조 기술 사용자에게 컴포넌트의 현재 상태를 설명한다.
        accessibilityValue={{
          min: 0,
          max: 100,
          now: 50,
          text: '컴포넌트의 현재 값을 나타낸다.',
        }}
        accessibilityActions={[]}
        onAccessibilityAction={() =>
          console.log('사용자가 접근성 작업을 수행하기 시작했다!')
        }
        onAccessibilityTap={() =>
          console.log('accessible 일때 접근성 탭 제스처를 호출하려 할 때')
        }
        onMagicTap={() =>
          console.log(
            'accessible 일때 접근성 마법 탭 제스처를 호출하려 할 때 iOS Only',
          )
        }
        onAccessibilityEscape={() =>
          console.log(
            'accessible 일때 사용자가 이탈 동작을 수행 할 때 iOS Only',
          )
        }
        accessibilityViewIsModal={() => console.log('iOS Only')}
        accessibilityElementsHidden={() =>
          console.log('내게 필요한 옵션이 숨겨져 있는지 확인 iOS Only')
        }
        accessibilityIgnoresInvertColors={() =>
          console.log('색상 반전 설정 iOS Only')
        }
        accessibilityLiveRegion={'none'} // Android Only >= 19
        importantForAccessibility={'none'} // Android Only
        hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
        nativeId="View" // 네이티브 클래스에서 뷰를 찾는데 활용 된다.
        onLayout={e => console.log('마운트 및 레이아웃 변경시 호출된다!', e)}
        onMoveShouldSetResponder={e =>
          console.log('모든 터치 이동에 대해 호출')
        }
        onMoveShouldSetResponderCapture={e =>
          console.log(
            '부모가 자식이 움직일 때 응답자가 되는 것을 막으려면 해당 핸들러가 필요하다',
          )
        }
        onResponderGrant={e => console.log('터치 이벤트에 응답하고 있다!')}
        onResponderMove={e => console.log('사용자가 손가락을 움직이고 있다.')}
        onResponderReject={e =>
          console.log('다른 응답자가 이미 활성 상태이다.')
        }
        onResponderRelease={e => console.log('터치가 끝났다.')}
        onResponderTerminate={e => console.log('onResponderTerminate')}
        onResponderTerminationRequest={e =>
          console.log('onResponderTerminationRequest')
        }
        onStartShouldSetResponderCapture={e =>
          console.log('onStartShouldSetResponderCapture')
        }
        pointerEvents="auto"
        removeClippedSubviews={true} // 많은 서브 뷰가 있을때 내용을 스크롤 하는데 유용하다. 이 속성을 적용하려면 경계 외부로 확장되는 많은 하위 뷰가 포함된 뷰에 적용 해야 한다.
        testID="testID" // 엔드 투 엔드 테스트에서 이 뷰를 찾는 데 사용된다.
        collapsable={true} // Android Only 자식을 레이아웃 하는데만 사용되거나 아무것도 그리지 않는 뷰는 기본 계층 구조에서 최적화로 자동 제거 될 수 있다. false를 사용하면 그렇지 않게 한다.
        needsOffscreenAlphaCompositing={true} // 100 % 정확한 색상과 혼합 동작을 유지하기 위해 오프 스크린으로 렌더링하고 알파와 합성해야하는지 여부. 기본 false
        renderToHardwareTextureAndroid={false} // Android Only. GPU 자체에서 모든 하위 요소를 단일 하드웨어 텍스처로 렌더링 해야 하는 지 여부.
        shouldRasterizeIOS={false} // iOS Only. renderToHardwareTextureAndroid와 비슷함.
        nextFocusDown={1}
        nextFocusForward={1}
        nextFocusLeft={1}
        nextFocusRight={1}
        nextFocusUp={1} // nextFocus Android Only 사용자가 ~로 이동 할때 포커스를 받을 다음 뷰를 지정
        clickable={true} // Android Only 내게 필요한 옵션이나 힌트에 대해 클릭 가능한지를 결정
      >
        <View style={{backgroundColor: 'blue', flex: 0.3}} />
        <View style={{backgroundColor: 'red', flex: 0.5}} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export {ViewColoredBoxesWithText};
