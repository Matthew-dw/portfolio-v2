import { Container } from "@mui/material";
import About from "./About";
import './Body.css'

type BodyProps = {
    showTitle: boolean
}

export default function Body(props: BodyProps) {
    return (
        <div className="portfolio-body">
            <div className="line short" />
            <Container maxWidth="sm">
                <About />  
            </Container>
            <div className="line" />
            <div className="line" />
            <div className="line" />
        </div>
    );
}