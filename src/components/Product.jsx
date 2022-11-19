import React from 'react'

const Product = ({url}) => {
  return (
    <div className='product'>
      <img src={url} className='product-image'/>
      
    </div>
  )
}

export default Product