import { Container, Typography } from '@mui/material';
import './Body.css'
import { Timeline, TimelineEntryProps } from "./Timeline";

export default function Body() {
    const entries2020: TimelineEntryProps[] = [
        {
            title: "Husky Injection Molding Systems",
            subtitle: "Software Design PEY Student",
            image: "https://www.husky.co/globalassets/huskylogo-red.svg",
            description: `
            This was a 16 month internship where I mainly worked on automating procedures related to parameterizing servo drives. 

            - Reduced storage space of servo drive parameter flash cards by 96%.
            - Created tool to migrate parameters from flash cards to production system code base allowing devs to update them more easily.
            - Parameter updates can now be performed remotely via software updates.`,
            githublink: null,
            projectlink: null
        }
    ]
    const entries2022 = [
        {
            title: "Mathracer",
            subtitle: "TypeScript, Node.js, Express, Websockets",
            image: undefined,
            description: "Multiplayer game where players compete to answer a list of questions the fastest",
            githublink: "https://github.com/Matthew-dw/MathRacer",
            projectlink: null
        },
        {
            title: "BookBazar",
            subtitle: "TypeScript, Nextjs, PostgresSQL",
            image: undefined,
            description: "Connects buyers and sellers of used textbooks at McMaster University. Developed for engineering capstone with 3 peers.",
            githublink: "https://github.com/calebmech/Book-Bazar",
            projectlink: "https://www.bookbazar.me/"
        },
    ]
    const entries2017 = [
        {
            title: "McMaster University",
            subtitle: "Software Engineering - Graduating April 2022",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/McMaster_University_logo.svg/1200px-McMaster_University_logo.svg.png",
            description: "Technical Electives: Syntax-Based Tools & Compilers, Advanced Algorithms and Complexity",
            githublink: null,
            projectlink: null
        }
    ]
    return (
        <div className="portfolio-body-wrapper">
            <PortfolioBodyTop />
            <Timeline entries={entries2022} year={2022}/>
            <Timeline entries={entries2020} year={2021}/>
            <Timeline entries={entries2017} year={2017}/>
        </div>
    );
}

function PortfolioBodyTop() {
    return (
        <Container maxWidth='sm' className='portfolio-body-top'>
            <Typography sx={{ fontSize: 40 }} >
                Hi!
            </Typography>
            <Typography sx={{ fontSize: 20 }} >
                I'm Matt, a software developer from Ontario.
            </Typography>
            <Typography sx={{ fontSize: 20 }} >
                Scroll through this timeline to see what I've been up to.
            </Typography>
        </Container>
    )
}