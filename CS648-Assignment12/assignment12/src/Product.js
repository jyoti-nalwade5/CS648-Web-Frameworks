import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';




class Product extends Component {

  render() {
    return (
    <div>
        <h1>My Inventory</h1>
        <Filter />
        <ProductForm/>
        <ProductTable/>
    </div>
    
     )
    }
}

export default Product;
