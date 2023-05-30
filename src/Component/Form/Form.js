import React from 'react';
import NewProductForm from "../Form/NewProductFrom"


function Form() {

const getData = (enterProductID,enterProductName,enterProductPrice,enterProductCategory) =>{
    console.log(enterProductID,enterProductName,enterProductPrice,enterProductCategory)
}
  return (
    <div>
         <NewProductForm getData= {getData}/>
    </div>
  )
}

export default Form