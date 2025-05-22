import { ShoppingBag } from 'lucide-react';
import React from 'react';

const CartIcon = () => {
  return (

        <>
          <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect'/>
          <span className='absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
        </>

  )
}

export default CartIcon