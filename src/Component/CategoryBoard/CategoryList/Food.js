import React from 'react'

function Food({data}) {
  // console.log("food", foodFilteredData)
  function handleRemove(id) {
    console.log(id);
    // remove item
  }
  return (
    <>
    <h3>Food</h3>
    
    {data.filter(item => item.productCategory === "Food" ).map(i => (
      <ul key={i.productID}>
  <li>{i.productID} {i.productName} {i.productPrice}<button type="button" onClick={() => handleRemove(i.productID)}>
                Remove
              </button></li>
      </ul>
    ))
    
    
    }
    </>
  )
}

export default Food