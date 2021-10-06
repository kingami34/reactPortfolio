import React, {useState} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Aboutme from './components/aboutme';
import Work from './components/work';
import Contactme from './components/contactme';
import './src/App.js'



function App() {
  const[currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home'){
      return <Home />;
    }
    if (currentPage === 'aboutme'){
      return <Aboutme />;
    }
    if (currentPage === 'work'){
      return <Work />;
    }
    if (currentPage === 'contactme'){
      return <Contactme />;
    };

  }
  const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <div>
       <Navbar handlePageChange={handlePageChange} />
       {renderPage()}
    </div>
  )
    
  
}

export default App;
