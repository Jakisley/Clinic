import React from 'react';
import cn from 'classnames';
import css from './burger-icon.module.css';

export interface BurgerIconProps {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
}

const BurgerIcon = ({ isOpen, setOpen }: BurgerIconProps) => {
    return (
        <div
            className={css.burger}
            onClick={() => {
                setOpen(!isOpen);
            }}
        >
            <div
                className={cn(css.line, {
                    [css.lineOpen]: isOpen,
                    [css.lineClose]: !isOpen,
                })}
            />
            <div
                className={cn(css.line, {
                    [css.lineOpen]: isOpen,
                    [css.lineClose]: !isOpen,
                })}
            />
            <div
                className={cn(css.line, {
                    [css.lineOpen]: isOpen,
                    [css.lineClose]: !isOpen,
                })}
            />
        </div>
    );
};
export default BurgerIcon;
