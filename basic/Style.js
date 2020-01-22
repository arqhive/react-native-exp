import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// JavaScript를 사용하여 애플리케이션을 스타일링 할 수 있다.
// 모든 핵심 컴포넌트는 style이라는 이름의 props를 허용한다.
// 일반적으로 웹에서 CSS가 작동하는 방식과 일치하지만 이름은 camelCase를 사용하여 작성된다.
// style props는 평번한 자바스크립트 객체가 될 수 있다.
// style에 배열을 전달할 수도 있다. 배열의 마지막 스타일이 우선된다.
// 컴포넌트가 복잡해짐에 따라 StyleSheet.create로 한 곳에서 여러 스타일을 정의하여 사용하는 것이 더 깔끔해진다.

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyle extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
  }
}
