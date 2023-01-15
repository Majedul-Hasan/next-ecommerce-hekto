
import React from 'react'
import Footer from './footet';
import Header from './header';

const Layout = () => {
    return (
        <div className="bg-gray-50">
          
          <Header />
          <div>
            {/* <Main /> */}
            <main>main component</main>
          </div>
          <Footer />
          
        </div>
      );
}

export default Layout