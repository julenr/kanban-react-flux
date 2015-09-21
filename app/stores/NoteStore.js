/**
 * Created by jr1500 on 11/09/15.
 */


import uuid from 'node-uuid';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
  constructor() {
    this.bindActions(NoteActions);

    this.notes = [];

    this.exportPublicMethods({
      get: this.get.bind(this)
    });
  }

  create(note) {
    const notes = this.notes;

    note.id = uuid.v4();

    this.setState({
      notes: notes.concat(note)
    });

  }

  update({id, task}) {
    console.log(`Note updated ${id} ${task}`);
    let notes = this.notes;
    const noteIndex = this.findNote(id);


    if(noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }

  delete(id) {
    let notes = this.notes;
    const indexNote = this.findNote(id);
    if(indexNote < 0) {
      return;
    }
    notes.splice(indexNote, 1);
    this.setState();
    console.warn('Successfully deleted a note', notes, indexNote);
  }

  findNote(id){
    const notes = this.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);
    if(noteIndex < 0) {
      console.warn('Failed to find a note', notes, id);
    }
    return noteIndex;
  }

  get(ids) {
    return (ids || []).map((id) => this.notes[this.findNote(id)]).filter((a) => a);
  }
}

export default alt.createStore(NoteStore, 'NoteStore');

