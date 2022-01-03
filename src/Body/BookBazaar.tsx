import { Button, Card, CardContent, Container, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
export default function BookBazaar() {
    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                    Book Bazaar
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    TypeScript, Nextjs, PostgresSQL
                    </Typography>
                    <Typography variant="body2">
                    Connects buyers and sellers of used textbooks at McMaster University.
                    </Typography>
                    <div className="body-project-buttons">
                        <Button >
                            Visit Book Bazaar
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