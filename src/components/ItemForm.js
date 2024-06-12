import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem, setNewItem] = useState({
    name : '',
    category : 'Produce',
    id : uuid()
  })

  const handleOnChange = (e) => {
    e.preventDefault()
    const categoryOrName = e.target.name
    const newItemValue = e.target.value
    setNewItem({...newItem, [categoryOrName] : newItemValue})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onChange={handleOnChange} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
