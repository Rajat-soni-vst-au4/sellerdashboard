import React, {useState, useEffect} from 'react';
import CategoryBoard from '../CategoryBoard/CategoryBoard';
import NewProductForm from "../Form/NewProductFrom"


function Form() {
    const [dataList, setDataList] = useState([]);

    console.log("data", dataList)

    useEffect(() => {
      localStorage.setItem("Data",JSON.stringify(dataList))

    }, [dataList])

const data = (enterProductID,enterProductName,enterProductPrice,enterProductCategory) =>{
    let SingleData = {
        productID: enterProductID,
        productName: enterProductName,
        productPrice: enterProductPrice,
        productCategory: enterProductCategory
    }

    setDataList(prev => [...prev, SingleData]);

}


  return (
    <div>
         <NewProductForm getData= {data}/>
         <CategoryBoard ShiftData={dataList}/>
    </div>
  )
}

export default Form