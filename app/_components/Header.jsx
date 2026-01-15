import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <div className='p-5'>
      <Image src={'/logo.svg'}
      alt='logo'
      width={160}
      height={100}
      />
    </div>
  )
}

export default Header