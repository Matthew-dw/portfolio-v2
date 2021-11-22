import { useEffect, useState } from 'react'
import './TitleButtons.css'
export type ButtonInfo = {
    icon: string;
    onClick: () => void;
}

type TitleButtonsProps = {
    showTitle: boolean;
    buttons: ButtonInfo[];
}

export default function TitleButtons(props: TitleButtonsProps) {
    const {showTitle: active, buttons} = props;
    const [activeDelayed, setActiveDelayed] = useState<boolean>(true);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

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
        <div className={`title-buttons-container ${activeDelayed ? 'active' : 'inactive'}` }>
            {buttons.map((b, index) => {
                return (
                    <div 
                        className={'title-button ' + b.icon} 
                        onClick={b.onClick} 
                        style={{
                            left: activeDelayed ? `${120 * index}px` : 0,
                            top: activeDelayed ? 0 : `${100*index}px`
                        }}
                    />
                )
            })}
        </div>
    )
}