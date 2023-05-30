import React from 'react'

function Electronics({data}) {
  // console.log("elec", electronicsFilteredData)

  return (
    <>
    <h3>Electronics</h3>
    
    {data.filter(item => item.productCategory === "Electronics" ).map(i => (
      <ul key={i.productID}>
 <li>{i.productID} {i.productName} {i.productPrice}</li>
      </ul>
    ))
    
    
    }
    </>
    
  )
}

export default Electronics
