import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

// 시간이 지나면서 항목 수가 변경 될 수 있는 긴 데이터 목록에 적합하다.
// 화면에 표시되는 요소만 렌더링 한다.
// data와 renderItem은 필수 props
// 일반적으로 서버에서 가져온 데이터를 표시하기 위해 사용한다.
export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
