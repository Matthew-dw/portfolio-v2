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
    const [keyframe, setKeyframe] = useState<number>(0);

    useEffect(() => {
        var timer1 : NodeJS.Timeout;

        if (active) {
            timer1 = setTimeout(() => setKeyframe(1), 200)
        } else {
            timer1 = setTimeout(() => setKeyframe(0), 1)
        }
        const clearAllTimeout = () => {
            clearTimeout(timer1);
        }
        return () => clearAllTimeout();
    }, [active])

    return (
        <div className={`title-buttons-container ${keyframe && 'active'}` }>
            {buttons.map((b, index) => {
                return (
                    <div 
                        className={'title-button ' + b.icon} 
                        onClick={b.onClick} 
                        style={{
                            left: keyframe ? 0 : `${120 * index}px`,
                            top: keyframe ? `${100*index}px` : 0
                        }}
                    />
                )
            })}
        </div>
    )
}