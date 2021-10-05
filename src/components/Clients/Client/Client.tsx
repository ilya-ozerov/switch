import React from 'react';
import './client.scss';

type ClientProps = {
    imageUrl: string;
    imageAlt: string;
}

export const Client: React.FC<ClientProps> = ({imageUrl, imageAlt}) => {
    return (
        <div className="client">
            <div className="client__image">
                <img src={imageUrl} alt={imageAlt} draggable={"false"}/>
            </div>
        </div>
    );
}