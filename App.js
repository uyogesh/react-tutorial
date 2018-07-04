import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components';
import Route from './src/route';
import Next from './src/components/next';
import {
  Router,
  Scene
} from 'react-native-router-flux';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" initial component={HomePage}/>            
          <Scene key="next" component={Next} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
