import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/Breackfast';
import Product from '../product/Product';

const ProductDetails = (props) => {
    const {ProductKey} = useParams();
    const product  = fakeData.find(pd => pd.details == ProductKey);
    console.log(product)
    return (
        <div>
            <h6>product details</h6>
            <Product showAddToCart={false} product = {product}></Product>
        </div>
    );
};

export default ProductDetails;