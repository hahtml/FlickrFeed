import React from 'react';

const GridItem = ({imgUrl, imgTitle}) => {
    return (
        <div className="grid-item">
            <figure>
                <img src={imgUrl} alt={imgTitle} />
                <figcaption>{imgTitle}</figcaption>
            </figure>
        </div>
    );
};

export { GridItem };