import React from 'react';
import './label.scss';

type LabelProps = {
    name: string;
    color: string;
}

export const Label: React.FC<LabelProps> = ({name, color}) => {
    return (
        <div className={"label "} style={{backgroundColor: color}}>{name}</div>
    );
}