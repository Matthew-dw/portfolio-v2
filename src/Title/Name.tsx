import { activeKeyFrameClass } from '../helpers/active'
import './Name.css'

type NameProps = {
    keyframe: number;
}

export default function Name(props: NameProps) {
    const { keyframe } = props
    return (
        <div className={activeKeyFrameClass("name", keyframe, 2)}>
            <div className={activeKeyFrameClass("name-animation", keyframe, 2)}>
                <div className={activeKeyFrameClass("name-container matthew", keyframe, 1)}>
                    <div className={activeKeyFrameClass("name-text", keyframe, 1)}> 
                        Matthew 
                    </div>
                </div>
                <div className={activeKeyFrameClass("name-container williams", keyframe, 1)}>
                    <div className={activeKeyFrameClass("name-text", keyframe, 1)}> 
                        Williams 
                    </div>
                </div>
            </div>
        </div>
    )
}