import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ images }) => {
    return (
        <div className="gallery">
            {images.map((image) => (
                <GalleryItem key={image.id} image={image} />
            ))}
        </div>
    );
};

export default Gallery;
