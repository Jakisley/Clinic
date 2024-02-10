import {HeaderProps} from './header.model';
import Popup from '../pop-up/pop-up.component';
import css from './header.module.css';
import cn from 'classnames';
import placeholder from './img/placeholder.png';
import whatsApp from '../../public/img/logo/whatsapp 1.png';
import BurgerIcon from '../burger-icon/burger-icon.component';
import { useState } from 'react';
import CustomButton from '../buttons/buttons.component';
import BurgerMenu from '../burger-menu/burger-menu.component'

const Header = ({ headerData, popupData }: HeaderProps) => {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <header className={css.header}>
            <div className={css.information}>
                <div className={css.informationWrap}>
                    <div className={css.logoAndAdress}>
                        <div className={css.burgerWrap}>
                            <BurgerIcon
                                isOpen={isBurgerOpen}
                                setOpen={setBurgerOpen}
                            />
                            <div 
                                className={cn(css.burgerMenuClose, {
                                [css.burgerMenuOpen]: isBurgerOpen,})}
                            >
                                <BurgerMenu 
                                    burgerData = {headerData.menu}
                                    buttomValue = {headerData.information.buttonText}
                                    popupData={popupData}
                                />
                            </div>
                        </div>
                        <h1 className={css.logo}>
                            {headerData.information.logo}
                        </h1>
                        <div className={css.location}>
                            <a href="https://maps.app.goo.gl/p4GGntfWQuU4xGWa7">
                                <img src={placeholder} alt="placeholder" />
                            </a>
                            <a href="https://maps.app.goo.gl/p4GGntfWQuU4xGWa7">
                                <h2 className={css.city}>
                                    {headerData.information.address.city}
                                </h2>
                                <h2 className={css.street}>
                                    {headerData.information.address.street}
                                </h2>
                            </a>
                        </div>
                    </div>
                    <div className={css.whatsAppAndAppointment}>
                        <a href={`tel:${headerData.information.phone}`}>
                            <div className={css.whatsAppWrap}>
                                <img
                                    src={whatsApp}
                                    alt="whatsAppLogo"
                                    className={css.whatsAppLogo}
                                />
                                <p className={css.phone}>
                                    {headerData.information.phone}
                                </p>
                            </div>
                        </a>
                        <CustomButton
                            type={'green'}
                            value={headerData.information.buttonText}
                            handleClick={setPopupOpen}
                        />
                    </div>
                </div>
            </div>
            <div className={css.menu}>
                <div className={css.menuWrap}>
                    {headerData.menu.map((action, id) => {
                        return (
                        <a href="/#" className={css.element} key = {`${id}`}>
                            {action.title}
                        </a>)
                    })}
                </div>
            </div>
            <div 
                className={cn(css.popapClose, {
                [css.popapOpen]: isPopupOpen,
            })}>
                <Popup data={popupData} setPopupOpen={setPopupOpen}/>
            </div>
        </header>
    );
};

export default Header;
