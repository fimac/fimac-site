import Talk from '../components/Talk';

const Talks = () => (
  <div>
    <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-gray-600'>
      Talks
    </h2>

    <Talk
      heading='Women Rising: Leading from where you are'
      subHeading='Panel discussion on why women in tech matters? What women-focused communities provide and how they can support women?'
      date='June 2020'
      links={[{ url: 'https://youtu.be/pUs7cUzIdaA', title: 'YouTube' }]}
    />
    <Talk
      heading='Event Sourcing with Commanded'
      subHeading='Elixir Australia'
      date='May 2020'
      links={[
        { url: 'https://youtu.be/DSms-Kzv3A4', title: 'YouTube' },
        {
          url:
            'https://github.com/fimac/talks/tree/master/event_sourcing_commanded_20052020',
          title: 'GitHub',
        },
      ]}
    />
    <Talk
      heading='Sonic Pi Workshop'
      subHeading='Coach, Women Who Code'
      date='January 2020'
      links={[
        {
          url:
            'https://www.linkedin.com/posts/activity-6637824128642621440AtQS',
          title: 'LinkedIn',
        },
      ]}
    />
    <Talk
      heading='Getting Embedded with Nerves'
      subHeading='Elixir Camp'
      date='October 2019'
      links={[
        {
          url: 'https://elixir.camp/',
          title: 'Site',
        },
      ]}
    />
    <Talk
      heading=' Is Inclusion Enough?'
      subHeading='Panel discussion at Canva'
      date='July 2019'
      links={[
        {
          url: 'https://youtu.be/-mhx6l1HwVo',
          title: 'YouTube',
        },
      ]}
    />
    <Talk
      heading='Docker Workshop'
      subHeading='Coach, Women Who Code'
      date='April 2019'
    />
    <Talk
      heading='Mocking with Mox'
      subHeading='Elixir Sydney'
      date='February 2019'
    />
    <Talk
      heading='Intro to Elixir'
      subHeading='DDD Sydney'
      date='August 2018'
      links={[
        {
          url: 'https://www.youtube.com/watch?v=lrVtZnR7k68&t=722s',
          title: 'YouTube',
        },
      ]}
    />
  </div>
);

export default Talks;
