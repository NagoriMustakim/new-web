import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const TeamCard = ({ image, name, position }) => {
    return (
        <Card
            sx={{
                minWidth: 250,
                maxWidth: 300,
                m: 2,
                textAlign: 'center',
                boxShadow: 'none',
                border: 'none',
                backgroundColor: 'inherit',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}
        >
            <CardMedia
                component="img"
                height="425"
                image={image}
                alt={'Partners image'}
            />
            <Typography fontSize={'24px'} fontWeight={'500'} pt={'25px'}>
                {name}
            </Typography>
            {position && <Typography fontSize={'16px'}>{position}</Typography>}
        </Card>
    )
}

export default TeamCard
