import Name from './Name';
import './Title.css'
import { useEffect, useRef, useState } from 'react';
import TitleButtons, { ButtonInfo } from './TitleButtons';

export default function Title() {   
    const [showTitle, setShowTitle] = useState(false);
    const [keyframe, setKeyframe] = useState<number>(3);
    const isInitalLoad = useRef<boolean>(true);
    const buttonInfo: ButtonInfo[] = [
        {
            name: 'Resume',
            icon: 'far fa-file-alt',
            onClick: () => window.open('https://www.matthewwilliams.ca/resume.pdf'),
        },
        {
            name: 'Linked in',
            icon: 'fab fa-linkedin-in',
            onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
        },
        {
            name: 'Github',
            icon: 'fab fa-github',
            onClick: () => window.open('https://github.com/Matthew-dw'),
        },
    ]

    // Timers for triggering different css transitions for the name animation
    useEffect(() => {
        if (isInitalLoad.current) {
            isInitalLoad.current = false;
            return
        }
        var timer1 : NodeJS.Timeout;
        var timer2 : NodeJS.Timeout;
        var timer3 : NodeJS.Timeout;

        if (!showTitle) {
            timer1 = setTimeout(() => setKeyframe(1), 1)
            timer2 = setTimeout(() => setKeyframe(2), 100)
            timer3 = setTimeout(() => setKeyframe(3), 400)
        } else {
            timer2 = setTimeout(() => setKeyframe(2), 1)
            timer1 = setTimeout(() => setKeyframe(1), 200)
            timer2 = setTimeout(() => setKeyframe(0), 600)
        }
        const clearAllTimeout = () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
        return () => clearAllTimeout();
    }, [showTitle])

    return (
        <div className={"title-wrapper"}>
            <div className={"title"} >
                <Name keyframe={keyframe} onClick={() => setShowTitle(!showTitle)} />
                <TitleButtons visible={keyframe === 3} buttons={buttonInfo} />
            </div>
        </div>
    )
}