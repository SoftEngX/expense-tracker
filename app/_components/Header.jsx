'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useUser, UserButton } from '@clerk/nextjs';

const Header = () => {
  const { isSignedIn } = useUser();
  
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Link href="/">
        <Image 
          src={'/logo.png'}
          alt='logo'
          width={160}
          height={100}
          priority
        />
      </Link>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href="/sign-in">
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;