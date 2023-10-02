import './App.css';
import React, {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    // usestate returns an array from the state and a function to change that array in the state
    { name: "Milk", isPurchased: false },
    { name: "Cheese", isPurchased: true },
    { name: "Beans", isPurchased: false },
  ])

  const [newItem, setNewItem] = useState("")

  const itemList = items.map((item, index) => {
    return(
      <li key={index} className={item.isPurchased ? "purchased" : "not-purchased"}>
        <span>{item.name}</span>
        {item.isPurchased ? <span className='purchased'>Purchased!</span> : <button onClick={() => purchaseItem(index)}>Purchase</button>}
        </li>
    )
  })

  const purchaseItem = (index) => {
    const copyItems = [... items]
    const updatedItem = {... copyItems[index]}
    updatedItem.isPurchased = true
    copyItems[index] = updatedItem
    setItems(copyItems)
  }

  const handleItemInput = (event) => {
    setNewItem(event.target.value)
  }

  const saveNewItem = (event) => {
    event.preventDefault()
    const copyItems = [... items]
    copyItems.push({name:newItem, isPurchased: false})
    setItems(copyItems)
    setNewItem("")
  }

  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <ul>
        {itemList}
      </ul>

      <form  onSubmit={saveNewItem}>
        <label htmlFor='new-item'>Add a new item:</label>
        <input id='new-item' type='text' value={newItem} onChange={handleItemInput}/>
        <input type='submit' value='Save new item'/>
      </form>

    </div>
  );
}

export default App;
