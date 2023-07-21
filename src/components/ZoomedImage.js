import React from 'react';

const ZoomedImage = ({ imageUrl }) => {
    return (
        <div className="zoomed-image">
            <img src={imageUrl} alt="Zoomed In" />
        </div>
    );
};

export default ZoomedImage;
