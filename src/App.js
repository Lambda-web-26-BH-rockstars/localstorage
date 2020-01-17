import React, {useState, useEffect} from 'react';
import Header from './component/Header'
import {v4} from 'uuid'
import './App.css'

import ItemLister from './component/ItemLister'

function App() {
  // const [newItem, setNewItem] = useState('')
  const [itemList, setItemList] = useState(
    localStorage.getItem("Items") === null ? [] : JSON.parse(localStorage.getItem("Items"))
  )

  const addNewItem = (addedItem) => {
    setItemList(
      [
        ...itemList, 
        {
          item : {
            id: v4(),
            name : addedItem
          }
        }
      ]
    )
  }

  const deleteItem = (itemToDelete) => {
    //console.log(itemToDelete)
    setItemList(itemList.filter((item) => item.item.id !== itemToDelete))
  }

  const updateItem = (updatedItem) => {
    console.log(updatedItem)
    setItemList(
      itemList.map(
        (item) => item.item.id === updatedItem.id ? {item : updatedItem} : item
      )
    )
  }

  useEffect(() =>{
    console.log(itemList)
    localStorage.setItem("Items", JSON.stringify(itemList))
  },[itemList])

  return (
    <>
      <Header 
        addNewItem={addNewItem}
      />
      {itemList.map((item)=>{
        return(
          <ItemLister 
            key={item.item.id}
            item={item.item}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        )
      })}
    </>
  );
}

export default App;
