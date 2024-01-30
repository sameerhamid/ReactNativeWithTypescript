import {View, Text, Button} from 'react-native';
import React, {useReducer} from 'react';

type MyState = {
  count: number;
};

const initialState: MyState = {
  count: 0,
};

type Action = {
  type: 'INCREMENT' | 'DECREMENT';
};

const reducer = (state: MyState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 22, fontSize: 30}}>
        {state.count}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 22,
          backgroundColor: 'teal',
          margin: 30,
        }}>
        <Button
          title="Increment"
          onPress={() => {
            dispatch({type: 'INCREMENT'});
          }}
        />

        <Button
          title="DECREMENT"
          onPress={() => {
            dispatch({type: 'DECREMENT'});
          }}
        />
      </View>
    </View>
  );
};

export default Counter;
