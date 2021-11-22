import { useState } from "react";
import Name from './Name';
import TitleButtons, { ButtonInfo } from './TitleButtons';
import './Title.css'

const buttonInfo: ButtonInfo[] = [
    {
        icon: 'fab fa-github',
        onClick: () => window.open('https://github.com/Matthew-dw'),
    },
    {
        icon: 'fab fa-linkedin-in',
        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
    },
    {
        icon: 'far fa-file',
        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
    },
    {
        icon: 'far fa-file',
        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
    },
]

export default function Title() {
    const [showTitle, setShowTitle] = useState<boolean>(false);
    
    return (
        <div className={`title ${showTitle ? 'inactive' : 'active'}`}>
            <Name showTitle={showTitle} setShowTitle={setShowTitle} />
            <TitleButtons showTitle={showTitle} buttons={buttonInfo} />
        </div>
    )
}