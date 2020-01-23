import React from 'react';
import {View, ProgressViewIOS} from 'react-native';

export default function App() {
  return (
    <View style={{marginTop: 100}}>
      <ProgressViewIOS
        progress={0.5}
        // progressImage={} // Image.propTypes.source
        progressTintColor="red" // 채워지는 색상
        progressViewStyle="default" // "bar"
        // trackImage={} // Image.propTypes.source // 채워지는 이미지
        trackTintColor="blue" // 안채워지는 색상
      />
    </View>
  );
}
