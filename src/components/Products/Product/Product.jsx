import React from "react";
import { useState,useEffect} from "react";



const Product = ({data}) => {
  // Note: this id should come from api
 console.log(data.length)

  

 
  const product = { id: data.id };
  console.log(product);
  
  return (<>
  {data.map((el,i)=>(
    <div>
     <div data-cy={`product-${el.id}`}>
     <h3 data-cy="product-name">{el.name}</h3>
     <h6 data-cy="product-description">{el.description}</h6>
     <button data-cy="product-add-item-to-cart-button">Add to cart</button>
     </div>
     </div>
  ))}
   
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      
    </div>
    </>
  );
};

export default Product;
