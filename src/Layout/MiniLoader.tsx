import React from 'react'

function MiniLoader({type="warning"}) {
  return (
    <div className={`spinner-border text-${type}`}></div>
  )
}

export default MiniLoader