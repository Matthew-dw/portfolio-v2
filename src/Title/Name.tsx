import { useEffect, useState } from "react";
import './Name.css'

type NameProps = {
    showTitle: boolean;
    setShowTitle: (clicked: boolean) => void;
}

export default function Name(props: NameProps) {
    const { showTitle, setShowTitle } = props;
    const [keyframe, setKeyframe] = useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

    // Timers for triggering different css transitions for the name animation
    useEffect(() => {
        if (isInitialLoad) {
            setIsInitialLoad(false);
            return;
        }
        var timer1 : NodeJS.Timeout;
        var timer2 : NodeJS.Timeout;
        var timer3 : NodeJS.Timeout;
        var timer4 : NodeJS.Timeout;

        if (!showTitle) {
            timer1 = setTimeout(() => setKeyframe(1), 200)
            timer2 = setTimeout(() => setKeyframe(2), 300)
            timer3 = setTimeout(() => setKeyframe(3), 800)
            timer4 = setTimeout(() => setKeyframe(4), 810)
        } else {
            timer1 = setTimeout(() => setKeyframe(3), 1)
            timer2 = setTimeout(() => setKeyframe(2), 100)
            timer3 = setTimeout(() => setKeyframe(1), 200)
            timer4 = setTimeout(() => setKeyframe(0), 600)
        }
        
        const clearAllTimeout = () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        }

        return () => clearAllTimeout();
    }, [showTitle, isInitialLoad])

    const activeKeyFrameClass = (n : number) : string => (keyframe < n) ? 'active' : 'inactive';
    
    return (
        <div className={`name ${activeKeyFrameClass(2)}`}>
            <div className={`name-animation ${activeKeyFrameClass(2)}`}
            onClick={() => setShowTitle(!showTitle)}
            >
                <div className={`name-container matthew ${activeKeyFrameClass(1)}`} >
                    <div className={`name-text ${activeKeyFrameClass(1)}`}> Matthew </div>
                </div>
                <div className={`name-container williams ${activeKeyFrameClass(1)}`} >
                    <div className={`name-text ${activeKeyFrameClass(1)}`}> Williams </div>
                </div>
            </div>
        </div>
    )
}