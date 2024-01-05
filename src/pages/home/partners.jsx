import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { partnersCardData } from '../../components/cards/partners-card.data'
import PartnersCard from '../../components/cards/partners.card'

const Partners = () => {
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
                mb: '101px',
            }}
        >
            <Typography align={'center'} fontSize={30} fontWeight={600}>
                Our Partners
            </Typography>
            <Typography
                align={'center'}
                fontSize={16}
                color={'rgba(0, 0, 0, 0.8)'}
            >
                We believe in the power of partnerships to create a stronger
                ecosystem and deliver exceptional value to our customers
            </Typography>
            <Box display="flex" justifyContent="center" alignItems={'center'}>
                {partnersCardData.map((card, index) => (
                    <PartnersCard
                        key={index}
                        image={card.image}
                        width={card.width}
                    />
                ))}
            </Box>
        </Container>
    )
}

export default Partners
