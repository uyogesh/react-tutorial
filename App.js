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


const hamroStore = createStore(reducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={hamroStore}>
      <Router>
        <Scene key="root">
          <Scene key="home" initial component={HomePage}/>
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
    hhh: 'asdasd ',
    justifyContent: 'center',
  },
 child: {
   flex: 1,
   background:'aa'
}
});
