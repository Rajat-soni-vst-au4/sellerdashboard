import React from 'react';
import "./Categoryboard.css";
import Electronics from './CategoryList/Electronics'
import Food from './CategoryList/Food'
import SkinCare from './CategoryList/SkinCare'


function CategoryBoard({ShiftData}) {

  return (
    <div className='Categoryboard'>
        
        <div className='e1'><Electronics data={ShiftData}/></div>
        <div className='e1'> <Food data={ShiftData}/></div>
        <div className='e1'><SkinCare data={ShiftData}/></div>
       
       
    </div>
  )
}

export default CategoryBoard