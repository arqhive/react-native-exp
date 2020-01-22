import React from 'react';
import {FlatList, ActivityIndicator, Text, View} from 'react-native';

// 기본적으로 iOS는 SSL을 사용하여 암호화되지 않은 요청을 차단 한다.
// http로 시작하는 요청을 사용하려면 App Transport Security 예외를 추가해야 한다.
// 2017년 1월 부터는 ATS 비활성화에 대한 합리적인 근거가 필요하다.
// XMLHttpRequest 또는 axios와 같은 타사 라이브러리를 사용 할 수도 있다.
// 기본적으로 앱에는 CORS 개념이 없으로 XMLHttpRequest의 보안 모델은 웹과 다르다.
// WebSocket 지원
export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  // ES2017의 async / await 사용 가능
  async getMoviesFromApi() {
    try {
      let response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
      );
      let responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson.movies,
        },
        function() {},
      );
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getMoviesFromApi();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
