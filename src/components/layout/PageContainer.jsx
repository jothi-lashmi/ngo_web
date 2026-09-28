import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageContainer = ({ children, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) {
      document.title = `${title} | HopeCare Foundation`;
    }
  }, [title]);

  return (
    <>
      <Navbar />
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageContainer;
