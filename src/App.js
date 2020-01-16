import React, {useState, useEffect} from 'react';
import Header from './component/Header'
import './App.css'

import ItemLister from './component/ItemLister'

function App() {
  const [newItem, setNewItem] = useState('')
  const [itemList, setItemList] = useState(
    localStorage.getItem("Items") === null ? [] : JSON.parse(localStorage.getItem("Items"))
  )

  const addNewItem = () => {
    setItemList([...itemList, newItem])
  }

  const deleteItem = (itemToDelete) => {
    //console.log(itemToDelete)
    setItemList(itemList.filter((item) => item !== itemToDelete))
  }

  const updateItem = (itemToUpdate, updatedItem) => {
    setItemList(itemList.map((item)=> item === itemToUpdate ? updatedItem : item
    ))
  }

  useEffect(() =>{
    //console.log(itemList)
    localStorage.setItem("Items", JSON.stringify(itemList))
  },[itemList])

  return (
    <>
      <Header 
        setNewItem={setNewItem}
        addNewItem={addNewItem}
      />
      {itemList.map((item, index)=>{
        return(
          <ItemLister 
            key={index}
            item={item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        )
      })}
    </>
  );
}

export default App;
