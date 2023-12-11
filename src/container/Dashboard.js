import React from 'react'
import { ProductList } from '../Data/ProductList'
import ProductCart from '../components/ProductCart'

function Dashboard() {
  return (
    <div className='d-flex flex-wrap justify-content-center p-3'>
        {ProductList.map((product)=> <ProductCart key={product.id} {...product}/>)}
    </div>
  )
}

export default Dashboard