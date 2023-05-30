import React from "react";


function Electronics({ data }) {
  // console.log("elec", electronicsFilteredData)
  function handleRemove(id) {
    console.log(id);
    // remove item
  }
  return (
    <>
      <h3>Electronics</h3>

      {data
        .filter((item) => item.productCategory === "Electronics")
        .map((i) => (
          <ul key={i.productID}>
            <li>
              {i.productID} {i.productName} {i.productPrice}{" "}
              <button type="button" onClick={() => handleRemove(i.productID)}>
                Remove
              </button>
            </li>
          </ul>
        ))}
    </>
  );
}

export default Electronics;
