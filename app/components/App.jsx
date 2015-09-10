/**
 * Created by jr1500 on 9/09/15.
 */

import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        },
        {
          id: uuid.v4(),
          task: 'Go to the embassy'
        }
      ]
    };
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <Notes items={this.state.notes}/>
      </div>
    );
  }
}
