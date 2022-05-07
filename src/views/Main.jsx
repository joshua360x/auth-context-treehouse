import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <section>

      <h3>Welcome Home</h3>
      <p>Theres alot to uncover, please take a look at guestbooks</p>
      <Link to='guestbook/views'>
      <button>Lets See</button>
      </Link>
    </section>
  )
}
