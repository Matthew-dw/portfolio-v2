import "./Year.css"
type YearProps = {
    year: number;
}
export default function Year(props: YearProps) {
    return (
        <div className="year">
            {props.year}
        </div>
    )
}