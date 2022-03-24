import React, {useState} from 'react'

export const ThoughtForm = ({newMessage,onNewMessageChange,onFormSubmit}) => {
  

  

 

  return (
    <form className="message-box" onSubmit={onFormSubmit}>
       <h1>❤️Send a happy thought!❤️</h1>
       <textarea value={newMessage} onChange={onNewMessageChange}/>
       <div classNAme="main">
       <button type="submit">❤️Send!❤️</button></div>
    </form>
  )
}