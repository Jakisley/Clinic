import React from 'react';
import { MailHandlerI, NameHanlderI, NumberHandlerI, handlBlurI } from '../header/header.model';



export const handlBlur = ({
    e,
    setNameFocused,
    setNumberError,
    setNumberFocused,
    setMailFocused,
    } : handlBlurI) => {
        switch (e.target.name) {
            case 'name':
                setNameFocused(true);
                break;
            case 'number': {
                const phone = e.target.value;

                phone === ''
                    ? setNumberError('Номер не может быть пустым')
                    : phone.length < 11
                      ? setNumberError('Номер должен быть 11 символов ')
                      : setNumberError('');
                setNumberFocused(true);
                break;
            }
            case 'mail':
                setMailFocused(true);
                break;
            default:
                break;
        }
    };

export const NumberHandler = ({e, setNumber,setNumberError}: NumberHandlerI) => {
        const phone = e.target.value.replaceAll(' ', '');

        if (!['7', '8'].includes(phone[0])) {
            setNumber('7');
            return null;
        }

        if ((+phone || phone === '') && phone.length < 12) {
            setNumber(phone);
            setNumberError('');
        }
    };


export const MailHandler = ({e, setMail, setMailError}: MailHandlerI) => {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const mail = e.target.value;
        setMail(mail);

        !re.test(String(mail).toLowerCase())
            ? setMailError('Почта некоректна')
            : setMailError('');
    };

export const NameHanlder = ({e, setName, setNameError  }: NameHanlderI) => {
        const name = e.target.value;
        setName(name);

        /[0-9]/.test(name)
            ? setNameError('Не должно быть цифр')
            : setNameError('');
    };