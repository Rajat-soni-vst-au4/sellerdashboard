import React, {useState} from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import NewProductForm from "../Form/NewProductFrom"


function Form() {
    const [dataList, setDataList] = useState([])

const getData = (enterProductID,enterProductName,enterProductPrice,enterProductCategory) =>{
    let SingleData = {
        productID: enterProductID,
        productName: enterProductName,
        productPrice: enterProductPrice,
        productCategory: enterProductCategory
    }
    setDataList([...dataList, SingleData]);
    
}
  return (
    <div>
         <NewProductForm getData= {getData}/>
         <CategoryBoard ShiftData={dataList}/>
    </div>
  )
}

export default Form