type Link = {
  url: string;
  title: string;
};

type TalkProps = {
  heading: string;
  subHeading?: string;
  date: string;
  links?: Link[];
};

const Talk = ({ heading, subHeading, date, links }: TalkProps) => {
  return (
    <div className='mt-10'>
      <div>
        <h3 className='text-4xl font-normal leading-normal mt-0 mb-2 text-gray-600'>
          {heading}
        </h3>
        <p className='mt-2 text-base font-light leading-relaxed mb-4 text-gray-500'>
          {subHeading}
        </p>
        <p className='mt-2 text-base font-light leading-relaxed mb-4 text-gray-500'>
          {date}
        </p>
      </div>
      <div className='mt-4 flex flex-row justify-start'>
        {links &&
          links.length > 0 &&
          links.map((l) => (
            <div className='mr-3 text-blue-600'>
              <a href={l.url}>{l.title}</a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Talk;
