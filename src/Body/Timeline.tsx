import { Button, Card, CardContent, Container, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

type TimelineProps = {
    entries: TimelineEntryProps[],
    year: number
};
export function Timeline(props: TimelineProps) {
    return (
        <div className="portfolio-body">
            <div className="year">
                {props.year}
            </div>
            {props.entries.map(entry => (
                <>
                    <div className='line short' />
                    <TimelineEntry {...entry}/>
                </>
            ))}
        </div>
    )
}
export type TimelineEntryProps = {
    title: string,
    description: string,
    image: string | null,
    subtitle: string | null,
    githublink: string | null,
    projectlink: string | null
}

export function TimelineEntry(props: TimelineEntryProps) {
    const { title, description, image, subtitle: technologies, githublink, projectlink } = props;

    function ButtonGroup() {
        if (projectlink !== null && githublink !== null) {
            return (
                <div className="body-project-buttons">
                    <Button onClick={() => window.open(projectlink)} style={{marginRight: '20px'}}>
                        Visit Book Bazaar
                    </Button>
                    <Button variant="contained" endIcon={<GitHubIcon />} onClick={() => window.open(githublink)}>
                        Github
                    </Button>
                </div>
            )
        } else if (githublink !== null) {
            return (
                <div className="body-project-buttons">
                    <Button variant="contained" endIcon={<GitHubIcon />} onClick={() => window.open(githublink)}>
                        Github
                    </Button>
                </div>
            )
        }
        
        return null;
    }

    return (
        <Container maxWidth="sm">
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} gutterBottom>
                        { title }
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        { technologies }
                    </Typography>
                    {image && <img className="portfolio-body-image" src={ image } alt={ title } />}
                    <Typography variant="body2" style={{whiteSpace: 'pre-line'}}>
                        { description }
                    </Typography>
                    <ButtonGroup />
                </CardContent>
            </Card>   
        </Container>
    )
}
