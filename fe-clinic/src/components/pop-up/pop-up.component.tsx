import React, { useState } from 'react';
import css from './pop-up.module.css';
import CustomButton from '../buttons/buttons.component';
import {MailHandler, NameHanlder, NumberHandler, handlBlur} from './pop-up.view-model'
import { PopupProps } from '../header/header.model';



interface Data {
    data: PopupProps;
    setPopupOpen: (state:boolean) => void;
}

const Popup = ({ data, setPopupOpen }: Data) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [mail, setMail] = useState('');
    const [nameFocused, setNameFocused] = useState(false);
    const [numberFocused, setNumberFocused] = useState(false);
    const [mailFocused, setMailFocused] = useState(false);
    const [nameError, setNameError] = useState('ФИО не может быть пустым');
    const [numberError, setNumberError] = useState(
        'Номер не может быть пустым'
    );
    const [mailError, setMailError] = useState('Почта не может быть пустой');

    return (
        <div className={css.popup}>
            <div className={css.crossWrap}>
                <div className={css.cross} onClick={() => {setPopupOpen(false)}}>
                    <div className={css.line}/>
                    <div className={css.line}/>
                </div>
            </div>
            <div className={css.substrate}>
                <div className={css.label}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>

                <form>
                    <div className={css.fields}>
                        {nameFocused && nameError && (
                            <div className={css.error}>{nameError}</div>
                        )}
                        <input
                            onChange={(e) => NameHanlder({e, setName, setNameError})}
                            type="text"
                            name="name"
                            value={name}
                            onBlur={(e) => handlBlur({
                                e,
                                setNameFocused,
                                setNumberError,
                                setNumberFocused,
                                setMailFocused,
                                })}
                            placeholder="ФИО"
                            maxLength={50}
                        />

                        {numberFocused && numberError && (
                            <div className={css.error}>{numberError}</div>
                        )}
                        <input
                            onChange={(e) => NumberHandler({e, setNumber,setNumberError})}
                            type="string"
                            name="number"
                            value={number}
                            onBlur={(e) => handlBlur({
                                e,
                                setNameFocused,
                                setNumberError,
                                setNumberFocused,
                                setMailFocused,
                                })}
                            placeholder="Номер телефона"
                            maxLength={11}
                        />

                        {mailFocused && mailError && (
                            <div className={css.error}>{mailError}</div>
                        )}
                        <input
                            onChange={(e) => MailHandler({e, setMail, setMailError})}
                            type="email"
                            name="mail"
                            value={mail}
                            onBlur={(e) => handlBlur({
                                e,
                                setNameFocused,
                                setNumberError,
                                setNumberFocused,
                                setMailFocused,
                                })}
                            placeholder="Электронная почта"
                        />
                    </div>

                    <CustomButton type = {'green'} value={data.button} handleClick = {()=>{}}/>
                </form>
            </div>
        </div>
    );
};

export default Popup;
