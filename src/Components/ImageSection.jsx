import React, { useEffect, useState } from 'react'

export default function ImageSection({ images }) {

    const [img,setImg]=useState(images[0]?images[0]:null)


 
const changeImage =(index)=>{
  setImg(images[index])
}
  return (
   <>
<div className='d-flex'>
  <div className='d-flex flex-column align-items-start bg-light border border-dark p-2 rounded mb-5'>
    {
      images?.map((val, key) => (
        <div className={img === images[key] ? 'border border-dark rounded-circle' : null} onClick={() => changeImage(key)} key={key}>
          <img className='img-fluid rounded-circle' src={val} alt={`img-${key}`} style={{ height: '50px', width: '50px' }} />
        </div>
      ))
    }
  </div>

  <div className="container w-75" style={{ height: '400px' }}>
    <img src={img} alt="" className="img-fluid mb-5" />
  </div>
</div>



   </>
  )
}
