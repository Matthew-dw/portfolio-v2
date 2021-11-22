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
        icon: 'far fa-file-alt',
        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
    },
    {
        icon: 'far fa-envelope',
        onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
    },
]

type TitleProps = {
    showTitle: boolean;
    setShowTitle: (clicked: boolean) => void;
}

export default function Title(props: TitleProps) {   
    const {showTitle, setShowTitle} = props;
    return (
        <div className={`title ${showTitle ? 'active' : 'inactive'}`}>
            <Name showTitle={showTitle} setShowTitle={setShowTitle} />
            <TitleButtons showTitle={showTitle} buttons={buttonInfo} />
        </div>
    )
}