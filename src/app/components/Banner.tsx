import { PlayIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export function Banner() {
  return (
    <>
      <div className='flex flex-col space-y-2 py-16 md:space-y-4 md:pb-12 lg:h-[65vh] lg:justify-end'>
        <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
          <Image
            src='/banner.png'
            alt='MAID'
            fill={true}
            className='h-[65vh] object-cover object-top lg:h-[95vh]'
          />
        </div>

        <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>MAID</h1>

        <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
          After fleeing an abusive relationship, a young mother finds a job
          cleaning houses as she fights to provide for her child and build them
          a better future.
        </p>
      </div>

      <div className='mb-6 flex space-x-3'>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5 md:text-xl'>
          <PlayIcon className='h-6' />
          Play
        </button>
        <button className='flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:py-2.5 md:text-xl'>
          <InformationCircleIcon className='h-6' />
          More Info
        </button>
      </div>
    </>
  );
}
