export const activeClass = (className: string, b: boolean) : string => {
    return b ? className.concat(" active") : className
}
export const activeKeyFrameClass = (className: string, keyframe: number, n : number) : string => {
    return activeClass(className, (keyframe < n))
};