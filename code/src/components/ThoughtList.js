import React from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtList=({loading, thoughts, onLikesIncrease})=>{
  
   
return(
<section >
     {
     thoughts.map(thought=>(
     <div className="thought-box" key={thought._id}><p className="thought-text">{thought.message} </p>
     <div className="likes"> 
     <div className="like-button" onClick={() => onLikesIncrease(thought._id)}> 
          <span className="emoji" role="img" aria-label="heart">❤️ </span>x {thought.hearts}
        </div> 
      
      <p className="date-text">
            {formatDistance(new Date(thought.createdAt), Date.now(), {
              addSuffix: true
            })}
          </p> 
     </div>
     </div>)
     )}
</section>
)}