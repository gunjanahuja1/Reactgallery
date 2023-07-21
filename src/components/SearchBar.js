import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch, onCategoryChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        try {
            const response = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23b276c6b9015f4c0183c281976aebd1&tags=${category}&per_page=20&format=json&nojsoncallback=1`
            );

            onSearch(response.data.photos.photo);
            onCategoryChange(category);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleSearchButtonClick = async () => {
        try {
            const response = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23b276c6b9015f4c0183c281976aebd1&tags=${selectedCategory}&text=${searchTerm}&per_page=20&format=json&nojsoncallback=1`
            );

            onSearch(response.data.photos.photo);
            onCategoryChange(searchTerm);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div className="search-bar">
            <div className="search-input">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by keywords..."
                />
                <button onClick={handleSearchButtonClick}>Search</button>
            </div>
            <div className="category-buttons">
                <button
                    className={selectedCategory === 'mountain' ? 'active' : ''}
                    onClick={() => handleCategoryClick('mountain')}
                >
                    Mountain
                </button>
                <button
                    className={selectedCategory === 'beach' ? 'active' : ''}
                    onClick={() => handleCategoryClick('beach')}
                >
                    Beach
                </button>
                <button
                    className={selectedCategory === 'birds' ? 'active' : ''}
                    onClick={() => handleCategoryClick('birds')}
                >
                    Birds
                </button>
                <button
                    className={selectedCategory === 'food' ? 'active' : ''}
                    onClick={() => handleCategoryClick('food')}
                >
                    Food
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
