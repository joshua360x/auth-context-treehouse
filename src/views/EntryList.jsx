import React, { useContext, useEffect, useState } from 'react'
import { contextAuth } from '../context/ProviderAuth'

export default function EntryList() {

  const context = useContext(contextAuth)
  const { entries, setEntries } = context
  const [name, setName] = useState()
  const [description, setDescription] = useState()

  // take an array and map over it

// useEffect(() => {

// }, [entries])


  function handleSubmit() {
    let obj = {
      name: context.userRecieved,
      description
    }
  entries.push(obj)
  }


  return (
    <div>
      <h3>Submit an Entry</h3>
         <label htmlFor="name">
        name
        <input
          value={name}
          type="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          value={description}
          type="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit Entry</button>
      </label>
      {
        entries.map((entry, i) => (
          <div key={entry+i}>
            <h4>{entry.name}</h4>
            <p>{entry.description}</p>
          </div>
        ))
      }
    </div>
  )
}
