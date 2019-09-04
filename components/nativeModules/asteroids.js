import React from 'react';
import {
  View,
  NativeModules
} from 'react-360';
const AsteroidsModule = NativeModules.Asteroids;

export default class Asteroids extends React.Component {
  componentDidMount() {
    this.instance = AsteroidsModule.populate();
  }

  render() {
    return null;
  }
}
