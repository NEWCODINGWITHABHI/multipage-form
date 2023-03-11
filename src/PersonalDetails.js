import React from 'react'
import SelectCountry from './SelectCountry';
function PersonalDetails({setPageNo,setData}) {

    function handleSubmit(e){
        e.preventDefault();
        const firstName=e.target.firstname.value;
        const lastName=e.target.lastname.value;
        const mobileNumber=e.target.mobilenumber.value
        const newData={firstName,lastName,mobileNumber};
        setData((prevData)=>({...prevData,...newData}))
    }
    function handleDate(e){
        console.log(e)
        setData((prevData)=>({...prevData,DOB:e.target.value}));
    }
  return (
    <div className='personal-details-container'>
      <h1>Personal Details</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className='input-conrol first-last-container'>
            <div className='first-name-control'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' name="firstname" />
            </div>
            <div className='last-name-control'>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id='last-name' name="lastname"/>
            </div>
        </div>
        <div className='input-control'>
            <label htmlFor="mob-no">Mobile NO</label>
            <input type="number" id='mob-no' name="mobilenumber" />
        </div>
        <div>
            <label htmlFor="dob">DOB</label>
            <input type="date"  onClick={handleDate}/>
        </div>
          <SelectCountry setData={setData}/>
        <div className='btn-box'>
            <button type='button'
            onClick={()=>setPageNo(page=>page-1)}
            >Prev</button>
        
            <button
            onClick={()=>setPageNo(page=>page+1)}
            >Next</button>
           
        </div>
      </form>
    </div>
  )
}

export default PersonalDetails;