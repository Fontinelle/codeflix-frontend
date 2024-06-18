import Image from 'next/image';

export function MovieCard({ index }: { index: number }) {
  return (
    <div className='group relative h-28 min-w-[200px] transform rounded bg-gradient-to-t from-transparent to-black transition duration-200 ease-in hover:z-50 hover:scale-110 md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]'>
      <Image
        src={`/item_${index}.png`}
        fill={true}
        alt='NETFLIX'
        className='rounded'
      />
    </div>
  );
}
