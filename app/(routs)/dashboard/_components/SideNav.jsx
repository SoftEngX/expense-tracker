import React from 'react';
import Image from 'next/image';

function SideNav () {
    return (
        <div className='h-screen p-5'>
            <Image src={'/logo.png'} alt='logo' width={160} height={100} />
        </div>

    )
}

export default SideNav
    


