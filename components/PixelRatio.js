import React from 'react';
import {View, Text, PixelRatio} from 'react-native';

// PixelRatio는 장치 픽셀 밀도에 대한 접근을 제공한다.
export default function App() {
  // 1 -> mdpi 안드로이드
  // 1.5 -> hdpi 안드로이드
  // 2 -> 아이폰4,5,6,7,8 XR, xhdpi 안드로이드
  // 3 -> 6plus, 7plus, 8plus, x, xs, xs max, pixel, pixel2, xxhdpi Android
  // 3.5 -> nexus6, pixel xl, pixel2 xl, xxhdpi Android
  const ratio = PixelRatio.get();
  const fontScale = PixelRatio.getFontScale();
  const dpToPx = PixelRatio.getPixelSizeForLayoutSize(55);
  const dpToPxBanOlim = PixelRatio.roundToNearestPixel(55); // 정수 픽셀 수에 해당하는 가장 가까운 크기로 반올림

  return (
    <View style={{marginTop: 100}}>
      <Text>{ratio}</Text>
      <Text>{fontScale}</Text>
      <Text>{dpToPx}</Text>
      <Text>{dpToPxBanOlim}</Text>
    </View>
  );
}
