import React, { useEffect } from "react";
import { Grid, Select } from "./Styled";
import {   useDispatch, useSelector } from 'react-redux'
import { getProductsData } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
export const Products = () => {
  const dispatch = useDispatch()
  const data = useSelector((state)=>state.data)
  
  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData())
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((element)=>(
        <ProductCard  {...element} key={element.id}/>))}
      </Grid>
    </>
  );
};
