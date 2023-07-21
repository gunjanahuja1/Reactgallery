import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './components/GalleryPage';
import { ImageContext } from './ImageContext';
import './App.css';

const App = () => {
  const [images, setImages] = React.useState([]);

  return (
    <Router>
      <div className="App">
        <ImageContext.Provider value={{ images, setImages }}>
          <Routes>
            <Route path="/" element={<GalleryPage />} />
          </Routes>
        </ImageContext.Provider>
      </div>
    </Router>
  );
};

export default App;
