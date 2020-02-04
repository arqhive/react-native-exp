import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

// method
// scrollToEnd([params])
// scrollToIndex(params)
// scrollToItem(params)
// scrollToOffset(paramse);
// recordInteraction() 상호 작용이 발생한 목록
// flashScrollIndicators() 스크롤 인디케이터를 잠깐 표시
// getScrollReponder()
// getScrollableNode()g

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title, separators}) {
  return (
    <TouchableHighlight
      style={styles.item}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA} // plain array
        renderItem={({item, index, separators}) => (
          <Item title={item.title} separators={separators} />
        )}
        ItemSeparatorComponent={separators => <View style={{borderWidth: 1}} />}
        ListEmptyComponent={() => <View />} // 목록이 비었을때 표시되는 컴포넌트
        ListFooterComponent={() => (
          <View>
            <Text>Footer</Text>
          </View>
        )} // 리스트 가장 하단에 렌더됨
        ListFooterComponentStyle={{backgroundColor: 'red'}}
        ListHeaderComponent={() => (
          <View>
            <Text>Header</Text>
          </View>
        )}
        ListHeaderComponentStyle={{backgroundColor: 'blue'}}
        keyExtractor={item => item.id}
        // columnWrapperStyle
        // extraData 외부 데이터에 반응하여 리스트가 다시 그려져야 한다면..
        // getItemLayout={(data, index) => )}
        // horizontal
        // initialNumToRender={10} // 초기 마운트 렌더링수
        // initialScrollIndex={1} getItemLayout과 같이 구현해야 한다.
        // inverted={true} // 스크롤 방향을 반대로 바꾼다.
        // numColumns={2} // 열수
        // onEndReached={() => alert('스크롤이 바닥에 닿았을때')}
        // onEndReachedThreshold={0.5} // 바닥에서 닿을때 오프셋
        progressViewOffset={1} // Android Only. 프로그레스 뷰 오프셋
        // onViewableItemsChanged 아래의 viewabilityConfig와 같이 사용하는데 사용할 일이 크게 있을거 같지 않다.
        // viewabilityConfig
        refreshing
        // removeClippedSubviews 이걸 true로 설정하면 스크롤 성능이 향상 될 수 있으나 콘텐츠 누락이 생길 수 있음
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
