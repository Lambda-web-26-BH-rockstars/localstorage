import React, {useState, useEffect} from 'react';
import Header from './component/Header'
import './App.css'

function App() {
  const [localStorageButton1, setLocalStorageButton1] = useState(
    localStorage.getItem("LocalStorageApplicationSuperCustomTagName") === undefined ?
    "header-button blue" : 
    localStorage.getItem("LocalStorageApplicationSuperCustomTagName")
  )


  useEffect(()=>{
    localStorage.setItem("LocalStorageApplicationSuperCustomTagName", localStorageButton1)
    console.log(localStorage.getItem("LocalStorageApplicationSuperCustomTagName"))
  },[localStorageButton1])

  const localStorageButton1ClickHandler = () => {
    localStorageButton1 === "header-button blue" ? 
    setLocalStorageButton1("header-button green") : 
    setLocalStorageButton1("header-button blue")
    
  }

  return (
    <>
      <Header 
        localStorageButton1={localStorageButton1} 
        setLocalStorageButton1={setLocalStorageButton1} 
        localStorageButton1ClickHandler={localStorageButton1ClickHandler}
      />
    </>
  );
}

export default App;
