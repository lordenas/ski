import React, { FC } from 'react';

type ButtonProps = {
    
}

const Button: FC = (props) => {
    return (
        <button className="button">{props.children}</button>
    )
}

export default Button;