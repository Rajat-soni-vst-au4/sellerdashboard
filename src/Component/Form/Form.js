import React from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import NewProductForm from "../Form/NewProductFrom"


function Form() {

const getData = (enterProductID,enterProductName,enterProductPrice,enterProductCategory) =>{
    console.log(enterProductID,enterProductName,enterProductPrice,enterProductCategory)
}
  return (
    <div>
         <NewProductForm getData= {getData}/>
         <CategoryBoard />
    </div>
  )
}

export default Form