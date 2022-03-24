import React, {useState, useEffect} from 'react'


export const ThoughtList=({loading, thoughts, onLikesIncrease})=>{
  
   
return(
<section >
     {
     thoughts.map(thought=>(
     <div className="thought-box"><p>{thought.message} </p>
     <div className="likes"> 
     <div className="like-button" onClick={() => onLikesIncrease(thought._id)}> 
          <span className="emoji" role="img" aria-label="heart">❤️ </span> 
        </div> 
      Likes: {thought.hearts}
     </div>
     </div>)
     )}
</section>
)}