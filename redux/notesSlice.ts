import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';
import {NotesState} from '../entity';

const initialState: Array<NotesState> = [];

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<NotesState>) {
      state.push(action.payload);
    },
  },
});

export const {addNote} = notesSlice.actions;
export const noteSelector = (state: RootState) => state.notes;
export default notesSlice.reducer;
