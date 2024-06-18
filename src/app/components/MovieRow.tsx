import { MovieCard } from './MovieCard';

export function MovieRow({ sectionTitle }: { sectionTitle: string }) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-6 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5].map((i) => (
          <MovieCard key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
