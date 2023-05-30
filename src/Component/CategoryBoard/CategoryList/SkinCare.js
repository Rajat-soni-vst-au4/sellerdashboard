import React,{useState} from 'react';

function SkinCare({data}) {
  // console.log("skin", skincareFilteredData)
  const [list, setList] = useState(data);

  function handleRemove(id) {
    localStorage.removeItem("id")
    // console.log(id);
    // remove item
  }
  return (
    <>
    <h3>Skincare</h3>
    
    {data.filter(item => item.productCategory === "SkinCare" ).map(i => (
      <ul key={i.productID}>
      <li>{i.productID} {i.productName} {i.productPrice} <button type="button" onClick={() => handleRemove(i.productID)}>
                Remove
              </button></li>
     
      </ul>
    ))
    
    
    }
    </>
  )
}

export default SkinCare