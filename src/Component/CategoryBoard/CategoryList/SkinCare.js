import React from 'react'

function SkinCare({data}) {
  // console.log("skin", skincareFilteredData)
  return (
    <>
    <h3>Skincare</h3>
    
    {data.filter(item => item.productCategory === "SkinCare" ).map(i => (
      <ul key={i.productID}>
      <li>{i.productID} {i.productName} {i.productPrice}</li>
     
      </ul>
    ))
    
    
    }
    </>
  )
}

export default SkinCare