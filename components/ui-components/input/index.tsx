import React, { FC } from 'react';
import classNames from 'classnames/bind';

type InputProps = {
    iconLeft?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    id?: string;
    disabled?: boolean;
    error?: string;
    value: string;
    onChange: (val: string) => void
}

const Input: FC<InputProps> = (props) => {

    const classInput = classNames(
        'app-input__input', 
        {'app-input__input--error': props.error}
    );


    return (
        <div className="app-input">
            {
                props.iconLeft &&
                <span className="app-input__icon">

                </span>
            }
            {
                props.label &&
                    <label className="app-input__label" id={props.id}>{ props.label }</label>
            }
            <input
                className={classInput}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                id={props.id || ''}
                disabled={props.disabled}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
            {
                props.error &&
                    <span className="app-input__error">
                        {props.error}
                    </span>
            }

        </div>
    )
}

export default Input;