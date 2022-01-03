import Intro from "./Intro";
import './Body.css'
import Year from "./Year";
import MathRacer from "./MathRacer";
import BookBazaar from "./BookBazaar";

type BodyProps = {
    showTitle: boolean
}

export default function Body(props: BodyProps) {
    return (
        <div className="portfolio-body-wrapper">
            <div className="portfolio-body">
                <div className="line short" />
                <Intro />  
                <div className="line" />
                <Year year={2021} />
                <div className="line short" />
                <MathRacer />  
                <div className="line short"/>
                <BookBazaar />
                <div className="line short" />
            </div>
        </div>
    );
}