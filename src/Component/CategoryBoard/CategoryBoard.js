import React from 'react';
import "./Categoryboard.css";
import Electronics from './CategoryList/Electronics'
import Food from './CategoryList/Food'
import SkinCare from './CategoryList/SkinCare'

function CategoryBoard(Datalist) {
    console.log(Datalist)
    // const ShiftData = (Datalist) =>{
    //     console.log(Datalist)
    // }
  return (
    <div className='Categoryboard'>
        
        <div className='e1'><Electronics /></div>
        <div className='e1'> <Food /></div>
        <div className='e1'><SkinCare /></div>
       
       
        
    </div>
  )
}

export default CategoryBoard