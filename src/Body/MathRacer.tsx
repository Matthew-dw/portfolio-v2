import { Button, Card, CardContent, Container, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
export default function MathRacer() {
    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                    Math Racer
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    TypeScript, Node.js, Express, Websockets
                    </Typography>
                    <Typography variant="body2">
                    Multiplayer game where players compete to answer a list of questions the fastest
                    </Typography>
                    <div className="body-project-buttons">
                        <Button >
                            Try Math Racer
                        </Button>
                        <Button variant="contained" endIcon={<GitHubIcon />} onClick={() => window.open("https://github.com/Matthew-dw/MathRacer")}>
                            Github
                        </Button>
                    </div>
                </CardContent>
            </Card>   
        </Container>
    )
}