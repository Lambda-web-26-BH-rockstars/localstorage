import React from 'react';
import Header from './component/Header';
import {v4} from 'uuid';
import './App.css';

import {useLocalStorage} from './util/useLocalStorage';
import ItemLister from './component/ItemLister';

function App() {
  const [itemList, setItemList] = useLocalStorage("Items", [])

  const addNewItem = (addedItem) => {
    const newItem = {item : {id: v4(), name : addedItem}}
    setItemList([...itemList, newItem])
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
