import React, { Component } from 'react'
import {ThemeContext} from '../contexts/ThemeContext'

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, light, dark} = this.context;
    const theme = isLightTheme ? light : dark ; 
    return (
      <div className='book-list' style={{ color: theme.colorText, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>The way of the world</li>
          <li style={{ background: theme.ui }}>Black pigeon speaks</li>
          <li style={{ background: theme.ui }}>Veritas</li>
          <li style={{ background: theme.ui }}>Gravitas</li>
        </ul>
      </div>
    )
  }
}
