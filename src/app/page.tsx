import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Novidades' />
        <MovieRow sectionTitle='Top da semana' />
        <MovieRow sectionTitle='Filmes de ação' />
      </main>
    </div>
  );
}
