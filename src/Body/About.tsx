import { Card, CardContent,  Typography } from '@mui/material'
import './About.css'
export default function About() {
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} gutterBottom>
                    About Me
                </Typography>
                <Typography variant="h5" component="div">
                    
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
    )
    // return (
    //     <div className="about">
    //         <h3 className="about-header">
    //             About Me
    //         </h3>
    //         <ul className="about-list">
    //             <li> Software Engineering Student at McMaster (Graduating 2022) </li>
    //             <li> Love programming and design </li>
    //             <li> Enjoy fitness and video games</li>
    //         </ul>  
    //     </div>
    // );
}