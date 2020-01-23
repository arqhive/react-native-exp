import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

// supportedOrientations의 값은 Info.plist의 UISupportedInterfaceOrientations의 항목에 제한된다.
export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 100}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible} // 모달 표시 여부
          supportedOrientations={[
            'portrait',
            'portrait-upside-down',
            'landscape',
            'landscape-left',
            'landscape-right',
          ]} // iOS Only 여기에 써도 UISupportedInterfaceOrientations에 없으면 안됨
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }} // 백버튼
          onShow={() => console.log('모달이 출력되었다')}
          onDismiss={() => console.log('모달이 사라졌다')}
          onOrientationChange={() => console.log('디바이스의 방향이 바뀌었다.')} // iOS Only
          // transparent={true} // 배경이 투명해진다.
          animationType="slide" // "none" (default)", "fade"
          hardwareAccelerated={true} // Android Only
          presentationStyle="fullScreen" // iOS Only 'pageSheet', 'formSheet', 'overFullScreen'
        >
          <View style={{marginTop: 22, backgroundColor: 'red'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
