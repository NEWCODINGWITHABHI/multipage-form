
import { useState } from "react";
import ConfirmationPage from "./ConfirmationPage";
import PersonalDetails from "./PersonalDetails";
import SuccessPage from "./SuccessPage";
import UserDetails from "./UserDetails";
import "./App.css";

function App() {
  const [pageNo,setPageNo]=useState(0);
  const [data,setData]=useState({
    userName:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    cnfPassword:"",
    DOB:"",
    country:"",
    mobileNumber:""

  })
  console.log(data);
  function component() {
    switch (pageNo) {
      case 0:
        return <UserDetails  setData={setData} setPageNo={setPageNo}/>;
      case 1:
        return <PersonalDetails setPageNo={setPageNo} setData={setData}/>;
      case 2:
        return <ConfirmationPage data={data} setPageNo={setPageNo}/>;
      case 3:
        return <SuccessPage />;
      default:
        return <h1>Invalid Page</h1>;
    }
  }
  return <div className="App">{component()}</div>;
}

export default App;
