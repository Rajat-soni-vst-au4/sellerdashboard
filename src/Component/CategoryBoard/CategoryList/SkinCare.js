import React from 'react'
import Button from '../../Button/Button'
function SkinCare({data}) {
  // console.log("skin", skincareFilteredData)
  return (
    <>
    <h3>Skincare</h3>
    
    {data.filter(item => item.productCategory === "SkinCare" ).map(i => (
      <ul key={i.productID}>
      <li>{i.productID} {i.productName} {i.productPrice} <Button /></li>
     
      </ul>
    ))
    
    
    }
    </>
  )
}

export default SkinCare