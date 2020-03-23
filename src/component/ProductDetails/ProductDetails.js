import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/Breackfast';
import Product from '../product/Product';

const ProductDetails = () => {
    const {ProductKey} = useParams();
    const product  = fakeData.find(pd => pd.details === ProductKey);
    console.log(product)
    return (
        <div>
            <h1>product details</h1>
            <Product showAddToCart={false} product = {Product}></Product>
        </div>
    );
};

export default ProductDetails;