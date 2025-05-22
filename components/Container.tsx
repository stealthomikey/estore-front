import React from 'react'

const Container = ({
    children, 
    className,
}: { 
    children: React.ReactNode; 
    className?: string; 
}) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-4${className ? ' ' + className : ''}`}>{children}</div>
  )
}

export default Container