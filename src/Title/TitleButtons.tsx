import { activeClass } from '../helpers/active';
import './TitleButtons.css'
export type ButtonInfo = {
    name: string;
    icon: string;
    onClick: () => void;
}

type TitleButtonsProps = {
    visible: boolean;
    buttons: ButtonInfo[];
}

export default function TitleButtons(props: TitleButtonsProps) {
    const {visible, buttons} = props;

    return (
        <div className={activeClass("title-buttons-container", !visible)} >
            {buttons.map((b, index) => {
                return (
                    <div 
                        key={index}
                        tabIndex={index + 1}
                        className={'title-button'} 
                        onClick={b.onClick} 
                    > 
                        <div className={'title-button-icon ' + b.icon} />
                        
                        <div className='title-button-name'> 
                            {b.name}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}