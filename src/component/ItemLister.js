import React, {useState} from 'react'

const ItemLister = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)
  const [editBox, setEditBox] = useState(props.item)

  return (
    <>
      <article className="itemRow">
        {
          toggleEdit ? (
            <>
              <div>
                <input
                  onChange={(e)=>{
                    setEditBox(e.target.value)
                  }}
                  name="editItem"
                  value={editBox}
                />
              </div>
              <div className="itemRow">
                <i 
                  onClick={(e)=>{
                    e.preventDefault()
                    props.updateItem(props.item, editBox)
                    setToggleEdit(!toggleEdit)
                  }}
                  className="itemIcon fad fa-arrow-right" 
                />
                <i 
                  onClick={()=>{
                    setToggleEdit(false)
                  }}
                  className="itemIcon fad fa-times"
                />
              </div>
            </>
          ) : (
            <>  
              <p>{props.item}</p>
              <div className="itemRow">
                <i 
                  onClick={() =>
                    {
                      //console.log("click")
                      setToggleEdit(!toggleEdit)
                    }
                  }
                  className="itemIcon fad fa-edit" 
                />
                <i 
                  onClick={() =>
                    {
                      //console.log("click")
                      props.deleteItem(props.item)
                    }
                  }
                  className="itemIcon fad fa-trash" 
                />
              </div>
            </>
          )
        }
      </article>
    </>
  )
}

export default ItemLister