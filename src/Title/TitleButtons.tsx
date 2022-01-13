import { useEffect, useState } from 'react'
import { activeClass } from '../helpers/active';
import './TitleButtons.css'
export type ButtonInfo = {
    name: string;
    icon: string;
    onClick: () => void;
}

type TitleButtonsProps = {
    showTitle: boolean;
    buttons: ButtonInfo[];
}

export default function TitleButtons(props: TitleButtonsProps) {
    const {showTitle: active, buttons} = props;
    const [activeDelayed, setActiveDelayed] = useState<boolean>(false);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    // Need to delay the change in css class for the animation to go off
    // If its not delayed the component will simply re render in the new state
    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
            return;
        }

        var timer1 : NodeJS.Timeout;
        if (active) {
            timer1 = setTimeout(() => setActiveDelayed(true), 200)
        } else {
            timer1 = setTimeout(() => setActiveDelayed(false), 1)
        }
        const clearAllTimeout = () => {
            clearTimeout(timer1);
        }
        return () => clearAllTimeout();
    }, [active, isInitialLoad])

    return (
        <div className={activeClass("title-buttons-container", activeDelayed)} >
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