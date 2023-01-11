import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import ProductModal from "./ProductModal/ProductModal";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import CartModal from "./CartModal/CartModal";
import { SORT_FILTER } from "../global-Variable";


const App = () => {
  const [filter, setFilter] = useState({
    gender: "M",
    category: [],
  });

  const [genderFilter, setGenderFilter] = useState("M");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [addedProductList, setAddedProductList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortBy, setSortBy] = useState('B');


  const onCategoryFilterChange =(value) => {
    

    let newFilterList;

    if(categoryFilter.includes(value)) {
      newFilterList = categoryFilter.filter(element => element !== value);
    }else{
      newFilterList = [...categoryFilter, value];
    }

    setCategoryFilter(newFilterList)
  }

  const onProductModalClose = () => {
    setSelectedProduct(undefined);
  }

  const onCartClick = () => {
    setShowCart(true);
  }

  const onCartClose = () => {
    setShowCart(false);
  }

  const onAddToCart = (product) => {
    setAddedProductList((prevValue) => {
      return [...prevValue, product]
    })
  }

  const onSortChange =(e) => {
    console.log(e.target.value);
    setSortBy(SORT_FILTER.find(elem => elem.label === e.target.value).id);
  }

  return (
    <div id="main">
      <ErrorBoundary>
      
      <Header counter={addedProductList} onCartClick={onCartClick} />
      {showCart  && <CartModal productList={addedProductList} onClose={onCartClose} />}

      { selectedProduct && <ProductModal product={selectedProduct} onAddToCart={onAddToCart} onClose={onProductModalClose}/>}

      <main style={{ display: "flex" }}>
        <Filter
          genderFilter={genderFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={onCategoryFilterChange}
          onGenderFilterChange={setGenderFilter}
        />
        <div style={{textAlign: 'center'}}> 
         
          <select onChange={onSortChange}>
          {
            SORT_FILTER.map(option => {
              return <option  id={option.id} selected={option.id === sortBy}>{option.label}</option>
            })
}
          </select>
        </div>
        <ProductList sortBy={sortBy} setSelectedProduct={setSelectedProduct} genderFilter={genderFilter} categoryFilter={categoryFilter} />
      </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;
