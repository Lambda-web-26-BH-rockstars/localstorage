import React from 'react'

const Header = (props) => {
  console.log(props)
  return(
    <> 
        <div
          onClick={ 
            (e) => {
              e.preventDefault()
              props.localStorageButton1ClickHandler()
            }
          }
          className={props.localStorageButton1}
        >
          LocalStorageButton1
        </div>
    </>
  )
}

export default Header