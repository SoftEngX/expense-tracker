import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image 
        src={'/logo.png'}
        alt='logo'
        width={160}
        height={100}
        priority
      />
      <Link href="/sign-up">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default Header;