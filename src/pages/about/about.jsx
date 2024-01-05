import React from 'react'
import Box from '@mui/material/Box'
import OurTeam from './our-team.about'
import TeamMembers from './team-members.about'

const About = () => {
    return (
        <Box sx={{ marginBottom: '185px' }}>
            <OurTeam />
            <TeamMembers />
        </Box>
    )
}

export default About
