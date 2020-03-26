import React, {createContext, useState} from 'react'

export const BookContext = createContext();

export default function BookContextProvider(props) {          //==============>> notice the difference with class and fn components, props as params !!!
  const [books, setBooks] = useState([
    {title:'the way of the world', id:1},
    {title:'gravitas', id:2},
    {title:'semper fidelis', id:3},
    {title:'allemaalopeenhoopje', id:4}
  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}                               
       {/* ==============>> notice the difference with class and fn components, no more this.props.children */}
    </BookContext.Provider>
  )
}
