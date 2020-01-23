import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

// 네트워크에서 이미지를 가져오는 경우 이미지의 크기를 수동으로 지정해야 한다.

// Layout Props..., Shadow Props..., Transforms...
const styles = StyleSheet.create({
  image: {
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'blue',
    borderRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: 'blue',
    borderWidth: 1,
    opacity: 0.5,
    overflow: 'visible', // 'hidden'
    tintColor: 'red',
    backfaceVisibility: 'visible', // 'hidden'
    overlayColor: 'blue', // Android Only 둥근 모서리가 있는경우 해당 모서리 부분에 단색이 채워짐
    width: 50,
    height: 200,
    resizeMode: 'stretch', // resizeMode props와 동일
  },
});

// Method

// Image.getSize(uri, success, [failure]);
// Image.getSizeWithHeaders(uri, headers, success, [failure]);
// Image.prefetch(url); // 이미지를 로컬 디스크 캐시로 캐싱
// Image.abortPrefetch(requestId); // 프리패치 중단 Android Only
// Image.queryCache(urls) // 이미지가 캐시되어있는지 확인
// Image.resolveAssetSource(
//   'https://facebook.github.io/react-native/img/tiny_logo.png',
// ); // 저작물 참조

// resizeMode: 원시 이미지 크기와 프레임의 크기가 일치하지 않을 때 이미지 크기를 조정하는 방법을 결정
// cover: 이미지의 크기가 뷰의 해당 크기와 같거나 커지도록 이미지의 크기를 균일하게 조정
// contain: 같거나 작아지도록 이미지의 크기를 균일하게 조정
// stretch: 너비와 높이를 독립적으로 조정
// repeat: 반복
// center: 중앙에
export default class DisplayAnImage extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
          }}
          // blurRadius={5} // 이미지에 흐림 필터를 넣고 흐림 반경을 설정
          onLayout={e => console.log('마운트 및 레이아웃 변경시 호출!')}
          // onLoad={() => alert('로드가 성공적으로 완료되었다.')}
          // onLoadEnd={() => alert('로드가 성공하거나 실패하였다.')}
          // onLoadStart={e => alert('로드가 시작되었다.')}
          resizeMode="cover" // "contain", "stretch", "repeat", "center"
          // loadingIndicatorSource={} // 이미지가 로드 되는 동안 사용될 소스
          onError={e => alert('로드 중에 에러가 발생했다.')}
          resizeMethod="auto" // Android Only 'auto', 'resize', 'scale'
          // capInsets={{top: 10, left: 10, bottom: 10, right: 10}} // iOS Only 이미지의 중앙과 테두리가 커진다.
          // defaultSource={} 기본 이미지 소스 Android랑 iOS 좀 다른데 쓸필요는 별로 없을거 같다.
          onPartialLoad={() => alert('부분 로드!')} // iOS 점진적 JPEG 로드를 위해
          // onProgress={e => alert('다운로드 중!')}
          fadeDuration={500} // 기본 300ms Android Only
          progressiveRenderingEnabled={true} // Android Only 프로그레시브 JPEG 스트리밍 활성화
        />
      </View>
    );
  }
}

// Android 에서 GIF 및 WebP 지원 하려면 android/app/build.gradle에 다음 추가
// dependencies {
//   // If your app supports Android versions before Ice Cream Sandwich (API level 14)
//   implementation 'com.facebook.fresco:animated-base-support:1.10.0'

//   // For animated GIF support
//   implementation 'com.facebook.fresco:animated-gif:1.12.0'

//   // For WebP support, including animated WebP
//   implementation 'com.facebook.fresco:animated-webp:1.10.0'
//   implementation 'com.facebook.fresco:webpsupport:1.10.0'

//   // For WebP support, without animations
//   implementation 'com.facebook.fresco:webpsupport:1.10.0'
// }
