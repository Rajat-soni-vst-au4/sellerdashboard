import React from 'react'
import Button from '../../Button/Button'

function Electronics({data}) {
  // console.log("elec", electronicsFilteredData)

  return (
    <>
    <h3>Electronics</h3>
    
    {data.filter(item => item.productCategory === "Electronics" ).map(i => (
      <ul key={i.productID}>
        <li>{i.productID} {i.productName} {i.productPrice} <Button /></li>
        
      </ul>
    ))
    
    }
    </>
    
  )
}

export default Electronics
