import React from "react";
import Product from "./Product/Product"
import { useState,useEffect} from "react";
import axios from "axios"

const Products = () => {
  const [data, setData] = useState(null)

  useEffect(() => {

    let abc=()=>{
      axios.get("http://localhost:8080/products")
      .then((res)=>{
    console.log(res.data)
    setData(res.data)
      })
      .catch((err)=>{
    console.log(err)
      })
    
    }
    abc();
    
  }, [])
  
  
 if(data){
  return <div>
 
    <Product data={data} />
    
    </div>;
 }
};

export default Products;
