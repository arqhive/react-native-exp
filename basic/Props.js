import React, {Component} from 'react';
import {Image} from 'react-native';

// 대부분의 컴포넌트는 생성될때 다른 파라미터를 사용하여 커스터마이즈 할 수 있다.
// 만들어지는 파라미터들을 props라고 부르며 properties의 줄임말이다.
export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };

    // source 라는 props를 사용하여 보여지는 이미지를 제어 할 수 있다.
    // 변수 pic을 JSX에 포함 시킨다.
    // 이것은 빌트인 컴포넌트에 사용되는 props
    return <Image source={pic} style={{width: 193, height: 110}} />;
  }
}
