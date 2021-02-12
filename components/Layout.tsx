type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='mx-auto px-4 lg:px-72'>
      <div className='md:px-8 lg:px-28 pb-96'>{children}</div>
    </div>
  );
};

export default Layout;
