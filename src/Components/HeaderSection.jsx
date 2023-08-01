import React from 'react'
import Button from 'react-bootstrap/Button';

export default function HeaderSection() {
  return (
   <>
<div className="bg-dark container-fluid p-5">
  <div style={{ width: '90vw', height: '50vh' }} className="d-flex justify-content-center align-item-center">
    <div className="container m-5 text-center" >
      <h1 className="text-white">Lorem ipsum dolor sit.</h1>
      <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora libero neque soluta, exercitationem laudantium et iste, similique dignissimos, corrupti fugit iure. Natus, eum. Tempore quisquam rem maiores quo distinctio alias.</p>
      <Button
                variant="light"
                type="submit"
                className="rounded-pill text-white border border-white"
                style={{ backgroundColor: 'transparent' }}
              >
                Submit
              </Button>    </div>

  </div>
  
</div>


   </>
  )
}
