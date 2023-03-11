import React from 'react'

function UserDetails({setData,setPageNo}) {


    function handleForm(e){
      e.preventDefault();
      const userName=e.target.username.value;
      const email=e.target.email.value;
      const password=e.target.pwd.value;
      const cnfPassword=e.target.cnfpwd.value;
      const newData={userName,email,password,cnfPassword};
    //   setData(oldData=>{...oldData ,...newData})
     if(password!=cnfPassword){
        alert("Password sdould match")
     }
     else{
         setData((prev)=>{return {...prev,...newData}
         }
         )
         setPageNo(1);
     }
   
    
    }
  return (
    <div className="user-details-container">
      <h1>User Details</h1>
      <form action="" onSubmit={handleForm}>
        <div className='input-control'>
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" name="username" />
        </div>
        <div className='input-control'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className='input-control'>
          <label htmlFor="pwd">Password</label>
          <input type="password" id="pwd" name="pwd" />
        </div>
        <div className='input-control'>
          <label htmlFor="cnf-pwd" name="cnfpwd">Confirm Password</label>
          <input type="password" id="cnf-pwd" name='cnfpwd' />
        </div>
        <div className='btn-control'>
        <button type='submit' id='next'>Next</button>
        </div>
      </form>
    </div>
  );
}

export default UserDetails
