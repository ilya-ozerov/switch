import React from 'react';
import '../works.scss';

type ItemProps = {
    imageUrl: string,
    imageAlt: string,
}

export const Item: React.FC<ItemProps> = ({imageUrl, imageAlt}) => {
    return (
        <div className="works__item">
            <img src={imageUrl} alt={imageAlt}/>
        </div>
    );
}