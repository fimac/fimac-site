import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
      <Head>
        <title>FiMac Site</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='mt-24'>
          <div>
            <h1 className='text-8xl font-normal leading-normal mt-0 mb-2 ml-1 text-gray-600'>
              <span className='text-pink-500'>F</span>iona{' '}
              <span className='text-blue-500'>M</span>cCawley
            </h1>
            <h2 className='text-6xl font-normal leading-normal mt-0 mb-2 ml-1 text-gray-600'>
              Software Developer
            </h2>
          </div>
          <div className='text-md leading-normal mt-6 mb-2 text-gray-400 font-bold flex flex-row'>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              size='sm'
              className='ml-3 fill-current w-4'
            />
            <p className='ml-1 pt-1'>Sydney, Australia</p>
          </div>
        </div>
        <div
          className='flex flex-grow items-center mt-6'
          id='example-navbar-warning'
        >
          <ul className='flex flex-row list-none'>
            <li>
              <a
                className='px-3 py-2 flex text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75'
                href='https://github.com/fimac'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size='sm'
                  className='fill-current w-6'
                />
              </a>
            </li>
            <li>
              <a
                className='px-3 py-2 flex text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75'
                href='https://twitter.com/saucerlike'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size='sm'
                  className='fill-current w-6'
                />
              </a>
            </li>
            <li>
              <a
                className='px-3 py-2 flex text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75'
                href='https://www.linkedin.com/in/fiona-mccawley/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size='sm'
                  className='fill-current w-6'
                />
              </a>
            </li>
            <li>
              <a
                className='px-3 py-2 flex text-xs uppercase font-bold leading-snug text-gray-400 hover:opacity-75'
                href='https://www.instagram.com/fi_tamiko_mac/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='fill-current w-6'
                />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
