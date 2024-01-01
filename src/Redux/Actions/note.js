//action Constants
export const ADD_Note="add Note";
export const Delete_Note="delete note";
export const Increase_Count="count";
//Action Creators
export const addNote=(text)=>({text,type:ADD_Note});
export const deleteNote=((index)=>({index,type:Delete_Note}));
// eslint-disable-next-line no-undef
export const Count=(count)=>({count:count++,type:Increase_Count});