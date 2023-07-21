import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Gallery from './Gallery';

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [heading, setHeading] = useState('Photos');

    const handleCategoryChange = async (category) => {
        setHeading(category);
        try {
            const response = await axios.get(
                `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23b276c6b9015f4c0183c281976aebd1&tags=${category}&per_page=20&format=json&nojsoncallback=1`
            );
            setImages(response.data.photos.photo);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleSearchByKeywords = (keywords) => {
        setHeading(keywords);
    };

    useEffect(() => {
        const searchByKeywords = async () => {
            try {
                const response = await axios.get(
                    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23b276c6b9015f4c0183c281976aebd1&text=${heading}&per_page=20&format=json&nojsoncallback=1`
                );
                setImages(response.data.photos.photo);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        if (heading !== 'Photos') {
            searchByKeywords();
        }
    }, [heading]);

    return (
        <div>
            <h1 className="heading">Photo Gallery</h1>
            <SearchBar onSearch={handleSearchByKeywords} onCategoryChange={handleCategoryChange} />
            <h1 className="heading1">{heading}</h1>
            <Gallery images={images} />
        </div>
    );
};

export default GalleryPage;
