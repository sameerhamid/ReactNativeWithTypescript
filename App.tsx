/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Counter from './screens/Counter';
import {StyleContextProvider} from './screens/StyleContext';
import Comp from './screens/Comp';
import Products from './components/Products';
import Notes from './screens/Notes';
import {Provider} from 'react-redux';
import {store} from './redux/store';

function App(): React.JSX.Element {
  return (
    // <StyleContextProvider>
    <View style={{marginTop: 22}}>
      {/* <View>
          <Counter />
        </View>

        <Comp /> */}

      {/* <Products />
       */}

      <Provider store={store}>
        <Notes />
      </Provider>
    </View>
    // </StyleContextProvider>
  );
}

export default App;
