import React, { useState } from 'react'
import SingleNotes from './SingleNotes';

function Notes() {

    const [notes, setNotes]= useState([]);
    const [curNote, setCurNote] = useState('');

    function updateCurNote(event){
       setCurNote(event.target.value)
    }

    function addNote(event){
       const newNotesArray = [...notes, curNote];
       setNotes(newNotesArray)
    }

    const ulStyle = {
      listStyle: 'none',
      display: 'grid',
      gridTemplateColoumns: 'repeat(3, 1fr)'
    }

  return (
    <>
         <input onChange={updateCurNote} type="text" />
         <button onClick={addNote}>Submit</button>
         <ul style={ulStyle}>
            {notes.map((note,index) => {
            return <li key={index}><SingleNotes note = {note}/></li>
         })}</ul>
    </>
  )
}

export default Notes