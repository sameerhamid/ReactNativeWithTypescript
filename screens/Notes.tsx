import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {NotesState} from '../entity';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {addNote, noteSelector} from '../redux/notesSlice';
import {useSelector} from 'react-redux';

const Notes = () => {
  const [notes, setNotes] = useState<NotesState>({} as NotesState);

  const dispatch = useAppDispatch();
  const storeNotes = useSelector(noteSelector);
  console.log(storeNotes);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TextInput
        placeholder="Enter note title"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
          fontSize: 18,
        }}
        value={notes.title}
        onChangeText={val => {
          notes.description = val;
          setNotes(notes);
        }}
      />
      <TextInput
        placeholder="Enter note description"
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
          fontSize: 18,
        }}
        value={notes.description}
        onChangeText={val => {
          notes.title = val;
          setNotes(notes);
        }}
      />

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(addNote(notes));
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Add Note
        </Text>
      </TouchableOpacity>

      {/* <FlatList
        data={storeNotes}
        renderItem={({item}) => {
          return (
            <View style={{width:100,height:100,backgroundColor:'red'}}>
              <Text>{item.description}</Text>
            </View>
          );
        }}
      /> */}
      {storeNotes.map(item => {
        return (
          <View
            key={item.title}
            style={{
              width: '90%',
              height: 70,
              alignSelf: 'center',

              marginTop: 22,
              justifyContent: 'center',
              paddingHorizontal: 28,
              backgroundColor: '#ccc',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.title}</Text>
            <Text style={{fontSize: 20}}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Notes;
