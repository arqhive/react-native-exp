import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

// TextInput은 유저가 텍스트를 입력 할 수 있게 하는 기본적인 컴포넌트다.
// onChangeText prop이 텍스트가 변경될때 마다 항상 호출된다.
// onSubmitEditing prop을 사용하면 텍스트가 submitted 될때 호출 된다.
export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10, marginTop: 100}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}
