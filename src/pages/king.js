import React from 'react'

export default function king({color}) {
  return (
    <div className='piece'>
    {
        [2,3,4,5,6].map((r)=>{
            return r!=2? <div key={r} className='inner' style={{width:`${r*10}px`,height:`${r*10}px`,borderRadius:`${(r*10)/2}px`,borderColor:color}}>  </div>: <div key={r} className='star' style={{color:'blue'}}>*</div>
        })
    }
  
</div>
  )
}
