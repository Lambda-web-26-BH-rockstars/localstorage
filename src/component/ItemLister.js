import React, {useState} from 'react'

const ItemLister = ({item, updateItem, deleteItem}) => {
  const [toggleEdit, setToggleEdit] = useState(false)
  const [editBox, setEditBox] = useState(item.name)

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
                    updateItem({...item, name:editBox})
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
              <p>{item.name}</p>
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
                      deleteItem(item.id)
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