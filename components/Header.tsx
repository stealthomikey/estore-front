import Container from './Container'
import React from 'react'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import { Search } from 'lucide-react'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavouriteBtn from './FavouriteBtn'
import Signin from './Signin'
import MobileMenu from './MobileMenu'

const header = () => {
  return (
    <header className='bg-white py-5'>
        <Container className='flex items-center justify-between text-lightColor'>
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0'>
          <MobileMenu />
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>
          <HeaderMenu />
          <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
            <SearchBar />
            <CartIcon />
            <FavouriteBtn />
            <Signin />
          </div>
        </Container>
    </header>
  )
}

export default header