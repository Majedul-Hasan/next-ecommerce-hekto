
import React from 'react'
import Footer from './footer';
import Header from './header';

const Layout = ({children}) => {
    return (
      <React.Fragment>
        <div className="bg-gray-50">          
          <Header />
          <div>
            {children}
          </div>
          <Footer />
          
        </div>
      </React.Fragment>

        
      );
}

export default Layout