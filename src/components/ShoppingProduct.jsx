import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const ShoppingProduct = () => {
  const {products, total, quantity} = useSelector((store) => store.shopping)  

  return (
    <div className='py-4'>
        {
            quantity >= 1 ? (
                <div>
                {
                    products.map(product => {
                        return (
                            <Product
                                key={product.name}
                                name = {product.name}
                                price = {product.price}
                                image = {product.image}
                                quantity = {product.quantity}
                            />
                        )
                    })
                }
                </div>
            ) : (
                <div>
                    <h1 className='text-center text-xl font-medium mt-2 py-4 text-white'>
                        No products in your basket
                    </h1>
                </div>
            )
        }

        <div className='flex flex-row items-center justify-center gap-x-24 mt-12 text-gray-100'>
            <p className='text-2xl font-medium'>Total</p>
            <p className='text-2xl font-medium'>$ {total}</p>
        </div>
    </div>
  )
}

export default ShoppingProduct