import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import type { AppProps /*, AppContext */ } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <header>
          <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3'>
            <div className='container mx-auto flex items-center justify-between'>
              <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                <Link href='/' className='text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-600'>
                  <span className='text-pink-500'>F</span>
                  <span className='text-blue-500'>M</span>
                </Link>
              </div>
              <div className='flex items-center' id='example-navbar-warning'>
                <ul className='flex flex-row list-none ml-auto'>
                  <li className='nav-item'>
                    <Link href='/about' className='px-3 py-2 flex items-center text-2xl uppercase leading-snug text-gray-600 hover:opacity-75'>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/talks' className='px-3 py-2 flex items-center text-2xl uppercase leading-snug text-gray-600 hover:opacity-75'>
                      Talks
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/work-history' className='px-3 py-2 flex items-center text-2xl uppercase leading-snug text-gray-600 hover:opacity-75'>
                      Work
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      href='/fionamccawley-resume.pdf'
                      className='px-3 py-2 flex items-center text-2xl uppercase leading-snug text-gray-600 hover:opacity-75'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Resume
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Component {...pageProps} />
      </Layout>
      <footer className='flex justify-center text-gray-400'>
        <div style={{ height: '50px' }}>
          Built using{' '}
          <a href='https://nextjs.org/'>Next.js</a>
        </div>
      </footer>
    </>
  );
}
