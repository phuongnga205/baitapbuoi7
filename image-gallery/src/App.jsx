// src/App.jsx
import React, { useState } from 'react';
import ImageCard from './components/ImageCard';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';
import images from './data';
import './App.css';

const categories = ['All', 'Nature', 'Urban'];

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = images.filter((image) => {
    const matchesQuery = image.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || image.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      <div className="search-container">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className="categories">
        {categories.map(category => (
          <CategoryButton
            key={category}
            category={category}
            onClick={setSelectedCategory}
          />
        ))}
      </div>
      <div className="gallery">
        {filteredImages.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default App;
