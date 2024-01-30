import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from './StyleContext';

const Comp = () => {
  const value = useContext(MyContext);
  console.log(value);

  return (
    <View style={{backgroundColor: value.bg, margin: 22, padding: 18}}>
      <Text style={{color: value.color, fontSize: 22, textAlign: 'center',}}>
        Comp
      </Text>
    </View>
  );
};

export default Comp;
