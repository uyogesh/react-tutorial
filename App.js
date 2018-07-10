import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/components';
import Route from './src/routes/route';
import Next from './src/components/next';
import {
  Router,
  Scene
} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers';


const store = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="home" initial component={HomePage}/>            
          <Scene key="next" component={Next} />
        </Scene>
      </Router>
      </Provider>
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
