import React from 'react'
import Grid from '@mui/material/Grid'
import { teamCardData } from '../../components/cards/team-card.data'
import TeamCard from '../../components/cards/team-card'
import Container from '@mui/material/Container'

const TeamMembers = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
                p: '9px 0',
                marginBottom: '20vh',
                flexGrow: '1',
            }}
        >
            <Grid container spacing={2}>
                {teamCardData.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <TeamCard
                            image={member.avatar}
                            name={member.name}
                            position={member.position}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default TeamMembers
