import React, {Component} from 'react';
import {TextInput} from 'react-native';

// View props를 상속한다.
// 안드로이드 에서는 키보드가 활성화된 상태일때 position: absolute 인 컴포넌트에 사이드 이펙트가 생긴다.
// 그런 경우 Manifest에 windowSoftInputMode 관련 값 설정

// autoCapitalize
// characters: 모든 알파벳이 대문자로 표기
// words: 각 단어의 첫 글자
// sentences: 각 문장의 첫 글자 (default)
// none: 하지 않음

// autoCompleteType 시스템에 자동 완성 힌트를 제공. Android 에서는 항상 휴리스틱을 사용하여 자동 완성을 제공하려고 시도한다.
// off, username, password, email, name, tel, street-address, postal-code, cc-number, cc-csc, cc-exp
// cc-exp-month, cc-exp-year

// clearButtonMode 오른쪽 지우기 버튼, 한 줄에만 적용 가능
// never, while-editing, unless-editing, always

// dataDetectorTypes 클릭 가능한 URL로 변환될 데이터 결정. multiline=true editable=false 인 경우에만 가능
// 기본적으로 감지되지 않음
// phoneNumber, link, address, calendarEvent, none, all

// importantForAutofill Android 26 이상에서 자동 완성 목적으로 앱안에 개별 필드를 뷰 구조에 포함해야 하는지 여부
// auto (default), no, noExcludeDescendants, yes, yesExcludeDescendants

// keyboardType
// 공통: default, number-pad, decimal-pad, numeric, email-address, phone-pad
// iOS: ascii-capable, numbers-and-punctuation, url, name-phone-pad, twitter, web-search
// Android: visible-password (이 타입을 쓰면 iOS는 기본값이 안읽히고 에러 발생)

// returnKeyType
// 공통: done, go, next, search, send
// Android: none, previous
// iOS: default, emergency-call, google, join, route, yahoo

// selectionState iOS Only 추가 정보 필요

// textContentType iOS Only 자동완성
// 11 이상: username, password
// 12 이상: newPassword, oneTimeCode
// 공통: none, URL, addresCity, addressCityAndState, addresState, countryName, emailAddress, familyName
// fullStreetAddress, givenName, jobTitle, location, middleName, name, namePrefix, nameSuffix, nickname
// organizationName, postalCode, streetAddressLine1, streetAddresLine2, sublocality, telephoneNumber
export default function UselessTextInput() {
  let inputRef = React.useRef(null);
  const [value, onChangeText] = React.useState('셀렉션 테스트 하고싶어요');

  React.useEffect(() => {
    console.log(inputRef);
    // isFocused(), clear()
  }, [inputRef]);

  return (
    <TextInput
      ref={inputRef}
      style={{marginTop: 100, height: 100}}
      onChangeText={text => onChangeText(text)} // 단일 문자열 값만 콜백 핸들러에 전달 된다.
      value={value}
      allowFontScaling={false} // 기본 true
      autoCapitalize="none"
      autoCompleteType="off" // Android Only
      autoCorrect={false} // 자동 수정 기본 true
      // autoFocus={true} // 기본 false componentDidMount때 초점이 자동으로 맞춰짐
      blurOnSubmit // submit시 텍스트필드가 흐리게 표시된다. 한 줄인 경우 기본 true, 여러 줄인 경우 기본 false
      caretHidden={false} // true인 경우 커서가 사라짐 기본 false
      clearButtonMode="always" // iOS Only
      clearTextOnFocus={true} // iOS Only 편집이 시작되면 필드를 자동으로 삭제
      contextMenuHidden={false} // true인 경우 길게 누르면 뜨는 메뉴가 숨겨짐 기본 false
      dataDetectorTypes="phoneNumber" // iOS Only
      defaultValue="호놀룰루"
      disableFullscreenUI={false} // Android Only 가로 방향으로 폰을 들고 인풋을 띄우는 경우 전체 모드로 할 것인지 아닌지 기본 false
      editable={true} // 편집 가능 여부
      enablesReturnKeyAutomatically={true} // iOS Only 텍스트가 없을때 리턴키를 비활성화 기본 false
      importantForAutofill="yes"
      // inlineImageLeft // Android Only 이미지가 왼쪽에 렌더링 됨 /android/app/src/main/res/drawable에 참조되어야 함
      // inlineImagePadding={10} // Android Only inlineImage 패딩
      // inputAccessoryViewID="hello" // iOS Only InputAccessoryView를 TextInputd에 연결하는 식별자
      keyboardAppearance="dark" // iOS Only 키보드의 색상 결정 "default", "light", "dark"
      keyboardType="default"
      // maxFontSizeMultiplier={0} // 가장 큰 배율 지정 with allowFontScaling
      maxLength={60} // 로직을 구현하지 말고 해당 prop을 사용한다.
      multiline={true} // iOS에서는 텍스트가 맨 위로 정렬되고 Android에서는 중앙에 정렬된다. textAlignVertical: top으로 동일한 동작 설정
      numberOfLines={2} // Android Only 줄수 설정
      // onBlur={() => alert('초점이 떠났습니다...')}
      onChange={e => console.log('입력 바뀌는중...')}
      // onContentSizeChange={e => alert('텍스트 입력 내용의 크기가 변경 됐을때')}
      onEndEditing={() => alert('입력이 끝났습니다...')}
      // onFocus={e => alert('포커스 됨!')}
      onKeyPress={e => console.log('키 눌림!')} // Android에서는 소프트 키보드 입력만 호출됨
      onLayout={e => console.log('레이아웃 변경')}
      onScroll={e => console.log('스크롤 됨!')}
      onSelectionChange={e => console.log('선택이 바뀜!')} // multiline=true 인 경우에만
      onSubmitEditing={e => console.log('제출을 눌렀습니다.')}
      placeholder="플레이스 홀더당"
      placeholderTextColor="red"
      returnKeyLabel="go" // Android only 리턴 키를 레이블로 설정하는건데 안바뀐다..?
      returnKeyType="done"
      rejectResponderTermination={true} // iOS Only true인 경우 터치 이벤트를 부모 컴포넌트에게 전달.
      scrollEnabled={true} // iOS Only 기본 true multiline=true 인 경우에만
      secureTextEntry={true} // 비밀번호와 같은 텍스트를 안전하게 유지 기본 false multiline=false
      // selection={{start: 0, end: 10}}
      // selectionColor="blue"
      selectTextOnFocus={true} // true 인경우 모두 블락처리 됨
      showSoftInputOnFocus={false} // Android Only 블락처리 되는 경우 키보드 보일지 안보일지 선택 기본 true
      spellCheck={false} // iOS Only 스펠 틀리면 빨간 밑줄 보이게 할지 말지 기본은 autoCorrect에서 상속된다.
      textBreakStrategy="highQuality" // Android Only "simple", "balances" (기본값)
      underlineColorAndroid="red" // AndroidOnly TextInput 밑줄 색
    />
  );
}

// style 지원
// 모든 Text의 style
// borderDirectionRadius는 불안한 경우 있음
