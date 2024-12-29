import React from 'react'

export default function Piece({id,color}) {
  return (
    
    <div id = {id} className='piece'>
            {
                [1,2,3,4,5,6].map((r)=>{
                    return <div  key={r} className='inner' style={{width:`${r*10}px`,height:`${r*10}px`,borderRadius:`${(r*10)/2}px`,borderColor:color}}> </div>
                })
            }
    </div>
 
  )
}
