import React from "react";
// import classes from 'ProductList.module.css';
import Product from "../Product/Product";
import productData from "../../../data";


const getSortedData = (productData, sortBy) =>{
  if(sortBy == 'A') {
    return productData;
  }else if(sortBy == 'B') {
    return productData.sort((a,b) => a.finalPrice - b.finalPrice);
  }else if(sortBy =='C') {
    return productData.sort((a,b) => b.discount - a.discount);
  }
}

const getFilterData = (data, genderFilter, categoryFilter, sortBy) => {
  let filterData = data.filter(element => element.gender === genderFilter);
  if(categoryFilter && categoryFilter.length) {
    filterData = [...filterData].filter(element => categoryFilter.includes(element.folded) || categoryFilter.includes(element.cat))
  }

  return getSortedData(filterData, sortBy);
 
}


const ProductList = (props) => {

     const { genderFilter, categoryFilter, setSelectedProduct, sortBy}= props;
     
     const filterData = getFilterData(productData, genderFilter, categoryFilter, sortBy)

  return (
    <div className="product-list-container">
      {filterData.map((product) => {
        return <Product product={product} setSelectedProduct={setSelectedProduct} />;
      })}
    </div>
  );
};

export default ProductList;
