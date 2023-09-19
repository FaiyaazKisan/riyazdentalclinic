import React from 'react'
//code to make the spinner at the center of the page 
function MainLoader() {
  return (
    <div style={{position:"fixed", display:"flex", top:"0", left:"0", minHeight:"100vh", minWidth:"100vw", alignItems:"center", justifyContent:"center"}}>
        <div className='spinner-border'>
        </div>
    </div>
  )
}

export default MainLoader