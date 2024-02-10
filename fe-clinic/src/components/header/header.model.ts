interface Adress {
    readonly city: string;
    readonly street: string;
}

interface Information {
    readonly logo: string;
    readonly address: Adress;
    readonly phone: string;
    readonly buttonText: string;
}

export interface MenuActions {
    readonly title: string;
}

export interface Header {
    readonly information: Information;
    readonly menu: Array<MenuActions>;
}

export interface HeaderProps {
    readonly headerData: Header;
    readonly popupData: PopupProps;
}

export interface PopupProps {
    readonly title: string;
    readonly description: string;
    readonly button: string;
}
export interface MailHandlerI {
    readonly e: React.ChangeEvent<HTMLInputElement>
    readonly setMail: (state:string) => void;
    readonly setMailError: (state:string) => void;
}

export interface NameHanlderI {
    readonly  e: React.ChangeEvent<HTMLInputElement>
    readonly setName: (state:string) => void;
    readonly setNameError: (state:string) => void;
}

export interface NumberHandlerI {
    readonly e: React.ChangeEvent<HTMLInputElement>
    readonly setNumber: (state:string) => void;
    readonly setNumberError: (state:string) => void;
}

export interface handlBlurI{
    readonly e: React.FocusEvent<HTMLInputElement, Element>
    readonly setNameFocused: (state: boolean) => void;
    readonly setNumberError: (state:string) => void;
    readonly setNumberFocused: (state: boolean) => void;
    readonly setMailFocused: (state: boolean) => void;
}