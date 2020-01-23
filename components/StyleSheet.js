import {StyleSheet} from 'react-native';

// 기본적인 스타일 생성 방법
const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth, // 플랫폼에서 가는 선의 너비
  },
});

const styles2 = StylesSheet.create({
  container: {
    // position: 'absolute', top: 0, left: 0, right: 0, bottom: 0
    ...StyleSheet.absoluteFill, // StyleSheet.absoluteFillObject 랑 별차이 없음
    flex: 1,
    backgroundColor: 'blue',
  },
});

// 하나의 스타일 객체로 병합, ID를 조회할 수 있다.
StyleSheet.flatten([styles.container]);
StyleSheet.flatten(styles.container);

// 두 스타일 결합 스타일중 거짓이 있으면 배열을 할당하지 않음
StyleSheet.compose(styles, styles2);
