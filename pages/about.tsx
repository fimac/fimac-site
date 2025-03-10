import Image from 'next/image'

const About = () => (
  <div>
    <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-gray-900'>
      About Me
    </h2>
    <div className='flex flex-wrap justify-center'>
      <div className='w-6/12 sm:w-4/12 px-4'>
        <Image
          src="/profile-pic.png"
          alt='Picture of Fiona'
          priority
          className='shadow rounded-full max-w-full h-auto align-middle border-none'
        />
      </div>
    </div>
    <section className='mt-10'>
      <p className='text-2xl font-light leading-relaxed mt-0 mb-4 text-gray-800'>
        After working in technical support roles in Audio Visual and IT for over
        ten years, I became interested in learning how the applications I
        supported were built.
      </p>
      <p className='text-2xl font-light leading-relaxed mt-12 mb-4 text-gray-800'>
        I enrolled in the Web Development Immersive course at General Assembly
        in March 2017. I was lucky enough to get my first dev role at a small
        startup on completing the course, and have been working as a software
        developer since August 2017.
      </p>
      <p className='text-2xl font-light leading-relaxed mt-12 mb-4 text-gray-800'>
        I like to be involved with the tech community by talking at meetups,
        mentoring students at General Assembly, and volunteering for Women Who
        Code.
      </p>
      <p className='text-2xl font-light leading-relaxed mt-12 mb-4 text-gray-800'>
        I have experience with Elixir, Ruby, Rust, Go, Typescript (Node & React),
        Elasticsearch, and GraphQL.
      </p>
    </section>
  </div>
);

export default About;
