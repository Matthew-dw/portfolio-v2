import { Container } from "@mui/material";
import About from "./About";
import './Body.css'

type BodyProps = {
    showTitle: boolean
}

export default function Body(props: BodyProps) {
    const {showTitle} = props;
    return (
        <div className={`body ${showTitle ? 'inactive' : 'active'}`}>
            <Container maxWidth="sm">
            <About />  
            </Container>
        </div>
    );
}