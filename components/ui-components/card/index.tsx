import React, { FC } from 'react';

type CardProps = {
    className?: string;
}

const Card: FC<CardProps> = (props) => {
    return (
        <div className={"card " + (props.className ?  props.className : '')}>
            {props.children}
        </div>
    )
}

export default Card;