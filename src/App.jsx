import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App