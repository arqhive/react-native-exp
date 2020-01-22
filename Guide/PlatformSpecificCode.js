// 플랫폼 별로 코드를 분리하는 두 가지 방법을 제공한다.
import {Platform, StyleSheet} from 'react-native';

// Platform Module
// 컴포넌트의 작은 부분만 플랫폼에 특정한 경우 이 옵션을 사용한다.

// Platform.OS
const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100,
});

// Platform.select
const stylesAnother = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
  },
});

// Platform은 어떤 값이라도 사용 할 수 있다.
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid'),
})();

<Component />;

// 안드로이드 버전 감지
// 앱이 실행중인 Android 플랫폼 버전
if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}

// iOS 버전 감지 (아래 예는 메이저 버전 번호)
const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
