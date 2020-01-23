import React from 'react';
import {View, Text, DrawerLayoutAndroid} from 'react-native';

// openDrawer, closeDrawer

export default class App extends React.Component {
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
          I'm in the Drawer!
        </Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300} // 탐색뷰 너비
        drawerPosition="left" // "left", "right"
        renderNavigationView={() => navigationView} // 렌더링되는 탐색뷰
        keyboardDismissMode="none" // "none", "on-drag" 탐색뷰가 열렸을때 키보드를 숨길지
        drawerLockMode="unlocked" // "locked-closed", "locked-open"
        // onDrawerClose={() => alert('닫혔음')}
        // onDrawerOpen={() => alert('열렸음')}
        // onDrawerSlide={() => alert('Slide')}
        // onDrawerStateChanged={() => alert('상태가 바뀌었음')}
        drawerBackgroundColor="blue" // 배경색상 (안바뀜)
        statusBarBackgroundColor="red" // 상태 표시줄이 zIndex가 올라감 API 21 이상
      >
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
            Hello
          </Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
            World!
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
