import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src='/logo.png'
      alt='Netflix'
      width={90}
      height={90}
      className='cursor-pointer'
    />
  );
}
