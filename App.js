import React, {Component} from 'react';
import {
  HelloWorldApp,
  Props,
  Props2,
  State,
  Style,
  HeightAndWidth,
  HeightAndWidth2,
  HandlingTextInput,
} from './basic';
import {
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsBasics,
} from './basic/LayoutWithFlexbox';

export default class App extends Component {
  render() {
    return <HandlingTextInput />;
  }
}
