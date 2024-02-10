import React from 'react';
import css from './buttons.module.css';

interface CustomButtonProps {
    type: string;
    value: string;
    handleClick: (state:boolean) => void;
}

const CustomButton = ({ type, value, handleClick }: CustomButtonProps) => {
    switch (type) {
        case 'green':
            return (
                <button
                    className={`${css.btn} ${css.btnGreen}`}
                    onClick={() => handleClick(true)}
                >
                    {value}
                </button>
            );
        case 'white':
            return (
                <button
                    className={`${css.btn} ${css.btnWhite}`}
                    onClick={() => handleClick(true)}
                >
                    {value}
                </button>
            );
        default:
            return <></>;
    }
};

export default CustomButton;
