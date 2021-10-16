import React, { FC } from 'react';
import { VscClose } from 'react-icons/vsc';

type TagProps = {
    onRemove: () => void;
    className?: string;
}

const Tag: FC<TagProps> = (props) => {
    return (
        <div className={"app-tag " + props.className}>
            {props.children}
            <span className="app-tag__remove" onClick={props.onRemove}><VscClose /></span>
        </div>
    )
}


export default Tag;