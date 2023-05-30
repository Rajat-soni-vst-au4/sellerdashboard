import React from 'react'
import Button from '../../Button/Button';
function Food({data}) {
  // console.log("food", foodFilteredData)
  return (
    <>
    <h3>Food</h3>
    
    {data.filter(item => item.productCategory === "Food" ).map(i => (
      <ul key={i.productID}>
  <li>{i.productID} {i.productName} {i.productPrice} <Button /></li>
      </ul>
    ))
    
    
    }
    </>
  )
}

export default Food