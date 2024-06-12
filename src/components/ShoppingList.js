import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, updateSearch] = useState('')
  const [itemsList, changeItemsList] = useState( items );

function handleSearchChange(event) {
    updateSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newItem) {
    changeItemsList([...itemsList, newItem])
  }

  const itemsToDisplay = itemsList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItemsToDisplay = search ? itemsToDisplay.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : itemsToDisplay

  return (
    <div className="ShoppingList">
      <ItemForm
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      search={search}
      />
      <ul className="Items">
        {searchedItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
