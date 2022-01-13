import Name from './Name';
import TitleButtons, { ButtonInfo } from './TitleButtons';
import './Title.css'
import { useEffect, useRef, useState } from 'react';
import { activeClass } from '../helpers/active';

type TitleProps = {
    showTitle: boolean;
    setShowTitle: (clicked: boolean) => void;
}

export default function Title(props: TitleProps) {   
    const {showTitle, setShowTitle} = props;
    const [keyframe, setKeyframe] = useState<number>(2);
    const isInitalLoad = useRef<boolean>(true);

    const buttonInfo: ButtonInfo[] = [
        {
            name: 'Github',
            icon: 'fab fa-github',
            onClick: () => window.open('https://github.com/Matthew-dw'),
        },
        {
            name: 'Linked in',
            icon: 'fab fa-linkedin-in',
            onClick: () => window.open('https://www.linkedin.com/in/matthew-dw/'),
        },
        {
            name: 'Resume',
            icon: 'far fa-file-alt',
            onClick: () => window.open('https://www.matthewwilliams.ca/resume.pdf'),
        },
        {
            name: '',
            icon: 'fas fa-angle-double-down '.concat(showTitle ? 'active' : 'inactive'),
            onClick: () => setShowTitle(!showTitle),
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

        if (!showTitle) {
            timer1 = setTimeout(() => setKeyframe(1), 1)
            timer2 = setTimeout(() => setKeyframe(2), 100)
        } else {
            timer1 = setTimeout(() => setKeyframe(1), 200)
            timer2 = setTimeout(() => setKeyframe(0), 600)
        }
        const clearAllTimeout = () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        }
        return () => clearAllTimeout();
    }, [showTitle])

    return (
        <div className={activeClass("title-wrapper", showTitle)}>
            <div className={activeClass("title", showTitle)}>
                <Name keyframe={keyframe}/>
                <div className={activeClass("title-sub", showTitle)}>
                    Software Developer
                </div>
                <TitleButtons showTitle={showTitle} buttons={buttonInfo} />
            </div>
        </div>
    )
}