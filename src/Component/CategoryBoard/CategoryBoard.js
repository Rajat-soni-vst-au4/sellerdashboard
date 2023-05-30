import React from 'react';
import "./Categoryboard.css";
import Electronics from './CategoryList/Electronics'
import Food from './CategoryList/Food'
import SkinCare from './CategoryList/SkinCare'


function CategoryBoard({ShiftData}) {
//    const [electronicsData, setelEctronicsData] = useState([])
//    const [foodData, setelFoodData] = useState([])
//    const [skincareData, setelSkincareData] = useState([])
    
//  ShiftData?.filter(input =>{
//     if(input.productCategory === "Electronics"){
//          setelEctronicsData([...electronicsData,input])
//     }
//     console.log(electronicsData)
//     // }else if(input.productCategory === "Food"){
//     //    return setelFoodData([...foodData,input])
//     // }else if(input.productCategory === "Skincare"){
//     //     return setelSkincareData([...skincareData,input])
//     // }else{
//     //     return "No Valid Data"
//     // }

//    })
  return (
    <div className='Categoryboard'>
        
        <div className='e1'><Electronics data={ShiftData}/></div>
        <div className='e1'> <Food data={ShiftData}/></div>
        <div className='e1'><SkinCare data={ShiftData}/></div>
       
       
    </div>
  )
}

export default CategoryBoard