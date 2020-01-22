import React, {Component} from 'react';
import {Text, View} from 'react-native';

// 컴포넌트를 제어하는 두 가지 유형의 데이터는 props와 state가 있다.
// props는 부모에 의해 설정되며 컴포넌트의 수명동안 고정된다. (즉 읽기 전용)
// 변경 될 데이터는 state를 사용해야 한다.
class Blink extends Component {
  componentDidMount() {
    // 매초마다 state를 토글 한다.
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000,
    );
  }

  // state 객체
  state = {isShowingText: true};

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return <Text>{this.props.text}</Text>;
  }
}

// 실제 응용 프로그램에서는 아마도 타이머를 state로 설정하지 않을 것이다.
// 서버 또는 사용자 입력에서 새 데이터가 생길때 state를 설정 할 것이다.
// Redux or MobX와 같은 상태 컨테이너를 사용하여 데이터 흐름을 제어 할 수도 있다.
// 이 경우 setState를 사용하지 않고 상태를 수정
export default class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text="I love to blink" />
        <Blink text="Yes blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me look at me look at me" />
      </View>
    );
  }
}
