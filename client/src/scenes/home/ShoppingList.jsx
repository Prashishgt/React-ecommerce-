import React, { useEffect, useState } from 'react';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from '../../components/Item';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../state';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("🚀 ~ file: ShoppingList.jsx:11 ~ ShoppingList ~ items:", items)
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }
  
  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div>
      Shopping list
    </div>
  )
}

export default ShoppingList