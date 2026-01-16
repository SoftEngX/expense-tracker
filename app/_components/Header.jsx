import React from 'react'
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
    <Image src={'/logo.png'}
    alt='logo'
    width={160}
    height={100}/>
    <Button>Get Started</Button>
    </div>
  )
}

export default Header