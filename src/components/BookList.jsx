import React, { Component } from 'react'

export default class BookList extends Component {
  render() {
    return (
      <div className='book-list'>
        <ul>
          <li>The way of the world</li>
          <li>Black pigeon speaks</li>
          <li>Veritas</li>
          <li>Gravitas</li>
        </ul>
      </div>
    )
  }
}
