import Talk from '../components/Talk';

const Talks = () => (
  <div>
    <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-gray-600'>
      Talks
    </h2>
    <Talk 
      heading='Encrypted Search Party'
      subHeading='A talk about application level encryption and an encryption schema called Order Revealing Encryption (ORE).'
      location='Ruby Conf Australia'
      date='Feb 2023'
      links={[
        {
          url: 'https://youtu.be/lp0k94sUwI8?si=kRisUaiKgSSFxVli',
          title: 'YouTube'
        },
        {
          url: 'https://github.com/fimac/toy_ore_rb',
          title: 'GitHub'
        }
      ]}
    />
    <Talk
      heading='Sensors, Beers and Nerves'
      subHeading='A talk on a small project to build a temperature monitoring system using a Raspberry Pi Zero W and Nerves'
      location='Elixir Australia'
      date='Feb 2021'
      links={[
        {
          url: 'https://youtu.be/BWQKvIoitoM',
          title: 'YouTube',
        },
        {
          url: 'https://github.com/fimac/temp_sensor_nerves',
          title: 'GitHub',
        },
        {
          url: 'https://twitter.com/saucerlike/status/1362222386154627078?s=20',
          title: 'Twitter',
        },
      ]}
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
