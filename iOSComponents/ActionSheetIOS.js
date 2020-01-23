import React from 'react';
import {View, Button, ActionSheetIOS} from 'react-native';

export default function App() {
  const showActionSheetWithOptions = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Remove', 'Confirm'], // 버튼 리스트 required
        destructiveButtonIndex: 1, // 빨간색 버튼 인덱스
        cancelButtonIndex: 0, // 취소 버튼 인덱스
        title: '선택해주세용~', // 액션시트 제목
        message: '뭘 골라볼까용~', // 제목 밑에 출력
        anchor: 1, // iPad 용
        tintColor: 'green', // destructiveButton 제외 버튼 색깔
      },
      // 여기에 동작 서술
      buttonIndex => {
        if (buttonIndex === 1) {
          /* destructive action */
          alert('Remove');
        }
      },
    );
  };

  const showShareActionSheetWithOptions = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        url: 'https://www.google.com', // 공유할 url, 로컬 파일이거나 base64로 인코딩 된경우 해당 파일이 직접 로드 및 공유된다.
        message: '공유할 메세지',
        subject: '메세지 서브젝트',
        excludedActivityTypes: [], // 액션시트에서 제외할 활동
      },
      (success, method) => alert(success, method), // 성공 여부, 공유 방법 문자열 (성공 콜백)
      e => alert(e), // 오류 객체 (실패 콜백)
    );
  };

  return (
    <View style={{marginTop: 100}}>
      <Button title="액션 스타일 시트!" onPress={showActionSheetWithOptions} />
      <Button
        title="공유 액션 스타일 시트!"
        onPress={showShareActionSheetWithOptions}
      />
    </View>
  );
}
