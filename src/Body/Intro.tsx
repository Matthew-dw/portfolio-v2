import { Card, CardContent, Container, Typography } from '@mui/material'
import './Intro.css'
export default function Intro() {
    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    22 Year Old Software Developer From Ontario
                    </Typography>
                    <Typography variant="body2">
                    Scroll through this timeline to see what I have been working on...
                    </Typography>
                </CardContent>
            </Card>   
        </Container>
    )
}