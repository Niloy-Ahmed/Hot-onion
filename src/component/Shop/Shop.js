import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/Breackfast';
import Product from '../product/Product';

const Shop = () => {
    // console.log(fakeData);
    const first6 = fakeData.slice(0,6)
    const [products, setProducts]= useState(first6)
    

    return (
       
        <div>
            {
                products.map(pd =><Product 
                    showAddToCart ={true}
                    product ={pd}></Product>)
            }
  
        </div>
        
    
    );
};

export default Shop;