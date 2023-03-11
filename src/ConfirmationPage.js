import React from 'react'

function ConfirmationPage({data,setPageNo}) {
  return (
    <div className='description-page'>
      <h1>Confirmation Page</h1>
       <h2>Please verify your Data </h2>
          <div>
        {Object.keys(data).map((key,index)=>{
           return  <p key={index}>{key}:{data[key]}</p>
         })
         }
          </div>
          <div className='btn-box'>
            <button onClick={()=>setPageNo(prev=>prev-1)}>Prev</button>
            <button onClick={()=>setPageNo(prev=>prev+1)}>Next</button>
          </div>
    </div>
  )
}

export default ConfirmationPage
