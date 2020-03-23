import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'
// import breakfast1 from '../../Breakfast/breakfast1.png'

const Product = (props) => {
    // console.log(props.product.images);
    const {title, description, images,price,details} = props.product;
    return (
 
          <div  className=" product" >
           <div className="card"  style={{width: "18rem"}}>
              <img className="card-img-top cart-img" src={images} ></img>
               <div className="card-body">
               <h5 className="card-title"><Link to={"/Product/"+details}>{title}</Link> </h5>
               <p className="card-text">{description}</p>
               <p className="card-text">{price}</p>
              <a href="#" className="btn btn-primary">Buy Now</a>
          </div>
         </div>
        </div>

      
    );
};

export default Product;
