import React, {useState} from 'react'

const Header = (props) => {
  const [textBoxState, setTextBoxState] = useState('')

  return(
    <>
        <form
          onSubmit={(e)=>{
            e.preventDefault()
            props.addNewItem(textBoxState)
            setTextBoxState('')
          }}
        >
          <label>Add an Item</label>
          <input
            onChange={(e)=>{
              setTextBoxState(e.target.value)
            }}
            name="addNewItem"
            value={textBoxState}
          />
          <i
            onClick={()=>{
              console.log(textBoxState)
              props.addNewItem(textBoxState)
              setTextBoxState('')
            }}
            className="itemIcon fas fa-plus-square" 
          />
        </form>
    </>
  )
}

export default Header
