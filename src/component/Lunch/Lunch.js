import React, { useState } from 'react';
import './Lunch.css';
import fakeData from '../../fakeData/Breackfast';
import Product from '../product/Product';

const Lunch = () => {
    console.log(fakeData);
    const second6 = fakeData.slice(6,12)
    const [products, setProducts]= useState(second6)
    return (
        
           <div>
            {
                products.map(pd =><Product product ={pd}></Product>)
            }
  
        </div>
        
    );
};

export default Lunch;