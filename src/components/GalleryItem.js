import React, { useState } from 'react';
import ZoomedImage from './ZoomedImage';

const GalleryItem = ({ image }) => {
    const imageUrl = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
    const [showZoomedImage, setShowZoomedImage] = useState(false);

    const handleMouseEnter = () => {
        setShowZoomedImage(true);
    };

    const handleMouseLeave = () => {
        setShowZoomedImage(false);
    };

    return (
        <div
            className="gallery-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="image-container">
                <img src={imageUrl} alt={image.title} />
                {showZoomedImage && <ZoomedImage imageUrl={imageUrl} />}
            </div>
        </div>
    );
};

export default GalleryItem;
