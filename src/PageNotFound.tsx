import React from 'react'
const NotFound=require('../src/Images/NotFound.png')

function PageNotFound() {
  return (
    <div className='p-3'>
    <h1 className='text-danger'>Page Not Found</h1>
    <p>This URL was not found on the website.</p>
    <img src={NotFound}/>
    </div>
  )
}

export default PageNotFound