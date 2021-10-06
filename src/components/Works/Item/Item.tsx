import React from 'react';
import '../works.scss';
import {ImageItem} from "../../common/Image/Image";

type ItemProps = {
    imageUrl: string,
    imageAlt: string,
}

export const Item: React.FC<ItemProps> = ({imageUrl, imageAlt}) => {
    return (
        <div className="works__item">
            <ImageItem src={imageUrl} alt={imageAlt}/>
        </div>
    );
}