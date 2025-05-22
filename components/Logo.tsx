import Link from 'next/link'
import React from 'react'

const Logo = ({ className, spanDesign }: { className?: string, spanDesign?: string }) => {
  return (
    <Link href={"/"}>
      <h2 className={`text-2xl text-shop-dark-green font-black tacking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans${className ? ' ' + className : ''}`}>
        The cat lab <br />
        <span className={`text-shop_light_green group-hover:text-shop-dark-green hoverEffect${spanDesign ? ' ' + spanDesign : ''}`}>Kenzo x Michael</span>
      </h2>
    </Link>
  )
}

export default Logo