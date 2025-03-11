import Work from '../components/Work';

const WorkHistory = () => (
  <div>
    <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 text-gray-800'>
      Work History
    </h2>
     <Work
      position='Software Engineer'
      company='CipherStash'
      url='https://cipherstash.com'
      from='Mar 2022'
      to='Nov 2024'
    >
      <p className='mt-6 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        CipherStash is a cyber security startup building queryable encryption and key management software.
      </p>
      <p className='mt-0 text-xl leading-relaxed mb-4 text-gray-600'>
        Elixir, Ruby, Rust, Go, Typescript (React), GraphQL (Absinthe, Apollo), PostgreSQL, Terraform
      </p>
    </Work>
    <Work
      position='Software Engineer'
      company='Assignar'
      url='https://assignar.com/'
      from='Mar 2021'
      to='Mar 2022'
    >
      <p className='mt-6 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        Assignar is a compliance, asset & workforce management software, for
        construction contractors.
      </p>
      <p className='mt-0 text-xl leading-relaxed mb-4 text-gray-600'>
        Python, Typescript (React), GraphQL (Apollo), PostgreSQL
      </p>
    </Work>
    <Work
      position='Software Developer'
      company='Alembic'
      url='https://alembic.com.au/'
      from='Mar 2020'
      to='Dec 2020'
    >
      <p className='mt-6 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        I worked on the following client engagements:
      </p>
      <p className='mt-2 text-xl font-light leading-relaxed text-gray-600'>
        <span className='font-bold'>Retail Marketplace</span> - a new
        marketplace platform for a large retail client. I primarily worked as
        part of the team building the checkout flow and staff tooling.
      </p>
      <p className='mt-0 text-xl leading-relaxed mb-4 text-gray-600'>
        Typescript (Node, React), GraphQL (Apollo client and server), PostgreSQL
      </p>
      <p className='mt-2 text-xl font-light leading-relaxed text-gray-600'>
        <span className='font-bold'>ClassSolver </span>- a SaaS platform for
        schools for automatically assigning school children to classes within a
        grade by balancing various constraints.
      </p>
      <p className="className='mt-0 text-xl leading-relaxed mb-4 text-gray-600">
        Elixir, GraphQL (Absinthe server side, Apollo client side), Typescript (React),
        PostgreSQL
      </p>
      <p className='mt-2 text-xl font-light leading-relaxed text-gray-600'>
        <span className='font-bold'>NFC Authentication</span> - a SaaS platform
        for supply chain tracking and traceability. Delivered a proof of concept
        for providing product information to consumers upon a scan of an NFC
        tag.
      </p>
      <p className='mt-0 text-xl leading-relaxed mb-4 text-gray-600'>
        Elixir, Phoenix Live View.
      </p>
    </Work>

    <Work
      position='Software Developer'
      company='Expert360'
      url='https://expert360.com/'
      from='Aug 2017'
      to='Mar 2020'
    >
      <p className='mt-6 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        Expert360 is a web platform that connects top-level consultants to
        companies from start-ups to leading organisations.
      </p>
      <p className='mt-2 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        Migrated legacy PHP application logic to a new codebase. Features
        migrated include the consultant & project search pages, consultant
        profile and project brief pages
      </p>
      <p className='mt-2 text-xl font-light leading-relaxed mb-4 text-gray-600'>
        Worked on consultant and project matching using Elasticsearch.
      </p>
      <p className='mt-0 text-xl leading-relaxed mb-4 text-gray-600'>
        Elixir, GraphQL (Relay), Typescript (React), Elasticsearch
      </p>
    </Work>

    <Work
      position='Client Support, Enterprise Technology'
      company='Macquarie Group'
      url='https://www.macquarie.com/au/en.html'
      from='Oct 2010'
      to='Dec 2016'
    />
    <Work
      position='Audio Visual Technician'
      company='Macquarie Group'
      url='https://www.macquarie.com/au/en.html'
      from='Feb 2008'
      to='Oct 2010'
    />
    <Work
      position='Audio Visual Technician'
      company='IHG Hotels & Resorts'
      url='https://www.sydney.intercontinental.com/'
      from='Jan 2006'
      to='Feb 2008'
    />
  </div>
);

export default WorkHistory;
