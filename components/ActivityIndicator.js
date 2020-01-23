import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, View, Platform} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator
          size="large"
          color="#0000ff"
          animating={true}
          hidesWhenStopped={false} // iOS Only 애니메이팅 상태가 아닐때 숨겨짐 (false면 움직이지 않고 굳음)
        />
        <ActivityIndicator
          size={Platform.OS === 'android' ? 25 : 'small'} // Android는 숫자가 지정 가능하나 small large 사이즈를 벗어나진 않음
          color="#00ff00"
        />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
