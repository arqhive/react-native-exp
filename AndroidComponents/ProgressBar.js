import React, {Component} from 'react';
import {ProgressBarAndroid, StyleSheet, View} from 'react-native';

// ActivityIndicator보다 기본 프로그레스 바가 더 좋아보임
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid
          animating={true} // default true
          color="red"
          styleAttr="Normal" // default
          testID="testID"
        />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Small" />
        <ProgressBarAndroid styleAttr="Large" />
        <ProgressBarAndroid styleAttr="Large" />
        <ProgressBarAndroid styleAttr="Inverse" />
        <ProgressBarAndroid styleAttr="SmallInverse" />
        <ProgressBarAndroid styleAttr="LargeInverse" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false} // styleAttr이 Horizontal이고 progress값이 있는 경우
          progress={0.776} // 0~1
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});
