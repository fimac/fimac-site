import Link from 'next/link';

type Work = {
  position: string;
  company: string;
  url: string;
  from: string;
  to: string;
  children?: React.ReactNode;
};

const Work = ({ position, company, from, to, children, url }: Work) => (
  <div className='mt-10'>
    <h3 className='text-3xl font-normal leading-normal mt-0 mb-2 text-gray-700'>
      {position}
    </h3>
    <h4 className="text-2xl font-normal mt-0 mb-2">
      <Link href={url} className="text-blue-600 underline hover:text-blue-500">
        {company}
      </Link>
    </h4>
    <h5 className='text-1xl font-normal leading-normal mt-0 mb-2 text-gray-700'>
      <span>{from}</span>
      {to ? '-' : ''}
      <span>{to ? to : 'current'}</span>
    </h5>
    <div>{children}</div>
  </div>
);

export default Work;
