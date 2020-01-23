import React from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';

// 스크롤뷰가 작동하기 위해서는 높이가 제한되어 있어야 한다
// 스크롤뷰의 높이가 직접 설정되어 있거나 상위 뷰의 높이가 설정되어 있는지 확인한다.

// method
// flashScrollIndicators(), scrollTo(
//   options?: {x?: number, y?: number, animated?: boolean} | number,
//   deprecatedX?: number,
//     deprecatedAnimated?: boolean,
// );, scrollToEnd(([options]: {animated: boolean, duration: number}));

// keyboardDismissMode 드래그 되면 키보드를 어떻게 할지 결정
// 공통: 'none', 'on-drag' (드래그 되면 키보드 닫음)
// iOS: 'interactive'
export default function ScrollViews() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        alwaysBounceHorizontal={false} // iOS Only 스크롤길이가 길지 않을때 가로로 튀는것 못하게
        alwaysBounceVertical={false} // iOS Only 스크롤길이가 길지 않을때 세로로 튀는것 못하게
        automaticallyAdjustContentInsets={true} // iOS Only 컨텐츠 삽입 자동 조절할지 여부 기본 true
        bounces={true} // iOS Only alwaysBounce를 다씹고 설정한다.
        bouncesZoom={true} // iOS Only 뭐 어쩌고 애니메이션..??
        // canCancelContentTouches={true} // iOS Only When false, once tracking starts, won't try to drag if the touch moves. The default value is true.
        centerContent={true} // iOS Only 스크롤크기보다 컨텐트가 작은경우 중앙에 맞춤
        // contentInset={{top: 100, left: 100, right: 100, bottom: 100}} // iOS Only 스크롤바 위치 설정
        contentInsetAdjustmentBehavior="always" // iOS 11이상 Only "scrollableAxes", "never", "automatic"
        contentOffset={{x: 10, y: 10}} // iOS Only 스크롤 시작 오프셋
        directionalLockEnabled={false} // iOS Only 드래그 하는 동안 반대 스크롤 고정
        indicatorStyle="default" // iOS Only "black(default와 동일)", "white"
        // maintainVisibleContentPosition iOS Only
        maximumZoomScale={1.0} // iOS Only 최대 줌배율
        minimumZoomScale={1.0} // iOS Only 최소 줌배율
        pinchGestureEnabled={true} // iOS Only 스크롤뷰에서 핀치 제스처 가능 여부
        // scrollEventThrottle={1000} // iOS Only 스크롤 이벤트를 시간 단위로 제어
        scrollToOverflowEnabled={true} // iOS Only 기본 false 컨텐트 크기 이상으로 프로그래밍 방식으로 스크롤 가능
        scrollsToTop={true} // iOS Only 상태표시줄 탭하면 스크롤이 맨 위로 올라감
        snapToAlignment="start" // iOS Only snpToInterval이 설정되어야 함 "center", "end"
        zoomScale={1.0} // iOS Only 스크롤뷰의 현재 배율
        // scrollIndicatorInsets={{ top: 0, left: 0, right: 0, bottom: 0}} // iOS Only 일반적으로 contentInset과 동일한 값으로 설정
        // endFillColor="blue" // Android Only 내용 보다 큰 스크롤을 나머지 색상으로 채운다.
        // nestedScrollEnabled={true} // Android Only 21이상에서 중첩 스크롤 허용 여부, iOS는 기본임
        // overScrollMode="auto" // Android Only "always", "never" 오버스크롤 모드의 기본값 재정의
        // pagingEnabled={true} // Android에서는 세로 페이징은 안됨
        // persistentScrollbar={false} // Android Only 스크롤 막대를 사용하지 않을때는 투명하게 회전하지 않는다. 기본 false
        // scrollPerfTag="스크롤 성능을 기록하는 사용하는데 태그" // Android Only
        // contentContainerStyle={{paddingVertical: 30, flex: 1}} // 컨텐트 래핑 컨테이너 스타일 이 스타일을 주면 스크롤이 안됨 이유를 잘 모르겠음
        decelerationRate="fast" // 스크롤 감속 속도 "fast", "nomral" 또는 number
        disableIntervalMomentum={false}
        disableScrollViewPanResponder={false} // 일반 사례에서는 사용하지 않음
        // horizontal={true}
        invertStickyHeaders={true} // 스티키 헤더가 하단으로 간다
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="never" // 탭 한후 키보드가 표시되는 시점 "always", "handled"
        // onContentSizeChange={() => alert('컨텐트 사이즈가 변경됨')}
        // onMomentumScrollBegin={() => alert('모멘텀 스크롤 시작')}
        // onMomentumScrollEnd={() => alert('모멘텀 스크롤 끝')}
        onScroll={e => console.log('프레임당 한번 발생함')}
        onScrollBeginDrag={() => console.log('스크롤 시작됨')}
        onScrollBeginDrag={() => console.log('스크롤 시작됨')}
        onScrollToTop={() =>
          console.log('iOS에서 상태표시줄 탭했을때 스크롤 탑으로 이동한경우')
        }
        refreshControl={true} // 세로에만 적용됨
        removeClippedSubviews={true} // 오프 스크린시 오프스크린 하위뷰가 기본 백업 슈퍼 뷰에서 제거된다. 기본 true
        scrollEnabled={true} // 스크롤 가능 여부
        showsHorizontalScrollIndicator={true} // 스크롤 인디케이터 표시 여부
        showsVerticalScrollIndicator={true} // 스크롤 인디케이터 표시 여부
        snapToEnd={true} // 기본 true
        snapToInterval={true} // 스크롤뷰가 값의 배수로 중지된다. pagingEnabled, snapToInterval 무시
        snapToStart={true} // 기본 true snapToOffsets와 같이 사용
        stickyHeaderIndices={[1]} // 상단에 도킹되는 자식을 결정하는 인덱스 배경, horizontal과 함께 되지 않음
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text style={styles.text}>
          한글한글한글한글한글한글한글한글한글한글한글한글
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
