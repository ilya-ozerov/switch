import React from 'react';
import "antd/dist/antd.css";
import './image.scss';
import {Image} from "antd";

type ImageProps = {
    src: string,
    alt: string,
}

export const ImageItem: React.FC<ImageProps> = ({src, alt}) => {

    return (
        <div className="image">
            <Image width='100%' height='100%' src={src} alt={alt}/>
        </div>
    );
}