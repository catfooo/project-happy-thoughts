import React, {useState, useEffect} from 'react'

import { ThoughtForm } from 'components/ThoughtForm'
import { ThoughtList } from 'components/ThoughtList'
export const App = () => {

  const[thoughts, setThoughts]=useState([])
  const [loading, setLoading]=useState(false)
  const[newMessage, setNewMessage]=useState('')
  
  
  const onNewMessageChange=(event)=>{setNewMessage(event.target.value)}
  
  const fetchMessages=()=>{  setLoading(true)
   fetch("https://happy-thoughts-technigo.herokuapp.com/thoughts")
   .then(res=>res.json())
   .then(json=>(console.log(json), setThoughts(json))
   )
    
  }



useEffect(()=>{ fetchMessages()},[])

const onFormSubmit=(event)=>{event.preventDefault()
  const options=  {
    method:'POST',
    headers:{'Content-Type':'application/json'
      },
    body:JSON.stringify({
      message:newMessage
    })
  }
    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', options)
    .then(res=>res.json())
    .then(()=>fetchMessages())
    .finally(()=>setNewMessage(''))
   }


   const handleLikesIncrease = (thoughtId) => {
     console.log("hej", thoughtId)
    const options = {
      method: 'POST',
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${thoughtId}/like`, options)
      .then(res => res.json())
      .then(data => {
        
        fetchMessages(data)      
      })
  }
   
  
   

  return (
    <div>
      <ThoughtForm newMessage={newMessage} onNewMessageChange={onNewMessageChange} onFormSubmit={onFormSubmit}/>
      <ThoughtList loading={loading} thoughts={thoughts} onLikesIncrease={handleLikesIncrease} />
    </div>
  )
}
