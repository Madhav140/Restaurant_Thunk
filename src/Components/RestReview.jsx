import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';


function RestReview({resto}) {
    const [open, setOpen] = useState(false);

  

  
  



  return (
    <>
        <button onClick={()=>setOpen(!open)} className='btn btn-warning me-4'>Click here to see the Reviews</button>
        
         <Collapse in={open}>
          <div className='mt-5'>
          {
          resto?.map((item)=>(
            < >
          <hr />
        <h6>Name : {item.name} </h6>
          <p>Rating : {item.rating}</p>
          <p>Description : {item.comments}</p>
          <p>Date : {item.date}</p>
        </>))
        
        }
          </div>
          
      </Collapse>
        
    </>
  )
}

export default RestReview