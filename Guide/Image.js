import React from 'react';
import { Image } from 'react-native';

// 일반적인 이미지
<Image source={require('./my-icon.png')} />

// my-icon@2x, my-icon@3x 접미사를 사용하여 화면 밀도에 대한 이미지를 제공 할 수도 있다. 
// 화면 밀도와 일치하는 이미지가 없으면 가장 가까운 최상의 옵션이 선택된다.
// 실제로 사용되는 이미지만 앱에 패키지 된다.


// 이미지 이름을 정적으로 구성해야 한다.
// GOOD
<Image source={require('./my-icon.png')} />

// BAD
var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
<Image source={require('./' + icon + '.png')} />

// GOOD
var icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;

// 네트워크 이미지의 경우 이미지의 크기를 반드시 수동으로 지정해야 한다! iOS ATS 요구사항을 충족시키기 위해 https://... 를 사용하는 것이 좋다.

// GOOD
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{width: 400, height: 400}} />

// BAD
<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />

// 네트워크 요청을 삽입 할 수도 있다.
<Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  }}
  style={{width: 400, height: 400}}
/>

// 인코딩 된 이미지 데이터 (매우 작고 동적인 이미지에만 권장)
<Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
  }}
  source={{
    uri:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  }}
/>

// 캐시 (iOS 만)
<Image
  source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    cache: 'only-if-cached',
  }}
  style={{width: 400, height: 400}}
/>

// deafult: 기본 전략
// reload: URL의 데이터가 원래 소스에서 로드
// force-cache
// only-if-cached

// iOS 에서 이미지에 대한 다음 스타일은 무시됨
// borderTopLeftRadius
// borderTopRightRadius
// borderBottomLeftRadius
// borderBottomRightRadius