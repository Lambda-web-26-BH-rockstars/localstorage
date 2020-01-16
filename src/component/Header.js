import React from 'react'

const Header = (props) => {
  //console.log(props)



  return(
    <> 
        <form 
          onSubmit={(e)=>{
            e.preventDefault()
            props.addNewItem()
            e.target.reset()
          }} 
        >
          <label>Add an Item</label>
          <input
            onChange={(e)=>{
              props.setNewItem(e.target.value)
            }}
            name="newItem"
            value={props.newItem}
          />
          {/* <i
            onClick={(e)=>{
              e.preventDefault()
              props.addNewItem()
              
            }} 
            className="itemIcon fad fa-plus-square" /> */}
        </form>
    </>
  )
}

export default Header