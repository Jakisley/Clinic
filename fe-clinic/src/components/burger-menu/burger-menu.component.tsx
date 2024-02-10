import React, { useState } from 'react';
import css from './burger-menu.module.css'
import { MenuActions, PopupProps } from '../header/header.model';
import CustomButton from '../buttons/buttons.component';
import Popup from '../pop-up/pop-up.component';

interface BurgerMenuProps {
    readonly burgerData: Array<MenuActions>;
    readonly buttomValue: string;
    readonly popupData: PopupProps;
}

const BurgerMenuContent = ({burgerData,buttomValue,popupData}:BurgerMenuProps) => {
    const [isBrgrPopupOpen, setBrgrPopupOpen] = useState(false);
    if (!isBrgrPopupOpen){
        return(
            <div className={`${css.wrap} ${css.menuWrap}`}>
                <div className={css.menu}>
                    {burgerData.map((action, id) => {
                            return (
                            <a href="/#" className={css.element} key = {`${id}`}>
                                {action.title}
                            </a>)
                        })}
                </div>
            <CustomButton type = {'white'} value= {buttomValue} handleClick = {setBrgrPopupOpen}/>

        </div>
        )
    }else{
        return (
            <div className={css.wrap}>
                <Popup data = {popupData} setPopupOpen ={setBrgrPopupOpen} />
            </div>
        )
    }
}
const BurgerMenu = ({burgerData,buttomValue, popupData}:BurgerMenuProps) => {
    return(
        <BurgerMenuContent 
            burgerData = {burgerData} 
            buttomValue={buttomValue}
            popupData={popupData}

        />
    )

}

export default BurgerMenu