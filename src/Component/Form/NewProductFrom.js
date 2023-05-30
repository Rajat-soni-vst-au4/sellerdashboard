import React,{useState} from 'react';

function NewProductForm( {getData}) {
    const [enterProductID, setEnterProductID] = useState("")
    const [enterProductName, setEnterProductName] = useState("")
    const [enterProductPrice, setEnterProductPrice] = useState("")
    const [enterProductCategory, setEnterProductCategory] = useState("")

    const CollectInputData =(e) =>{
        e.preventDefault()
        getData(enterProductID,enterProductName,enterProductPrice,enterProductCategory)
        setEnterProductID("")
        setEnterProductName("")
        setEnterProductPrice("")
        setEnterProductCategory("")
    }
  return (
    <div>
        <form onSubmit={CollectInputData}>
            <label>Product ID</label>
            <input type="number" value={enterProductID} onChange={(e) => setEnterProductID(e.target.value)}/>
            <label>Product Name</label>
            <input type="text" value={enterProductName} onChange={(e) => setEnterProductName(e.target.value)}/>
            <label>Product Price</label>
            <input type="number" value={enterProductPrice} onChange={(e) => setEnterProductPrice(e.target.value)}/>
            <label>Product category</label>
            <select value={enterProductCategory} onChange={(e) => setEnterProductCategory(e.target.value)}>
            <option value="Other">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Food">Food</option>
              <option  value="SkinCare">SkinCare</option>
              
            </select>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewProductForm