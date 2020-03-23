import React, { useState } from 'react';
import './Dinner.css';
import fakeData from '../../fakeData/Breackfast';
import Product from '../product/Product';

const Dinner = () => {
    console.log(fakeData)
    const last6 = fakeData.slice(12,18)
    const [products, setProducts]= useState(last6)
    return (
        
             <div>
            {
                products.map(pd =><Product product ={pd}></Product>)
            }
  
        </div>
       
    );
};

export default Dinner;