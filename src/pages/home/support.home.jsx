import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { supportCardData } from '../../components/cards/support-card.data'
import SupportCard from '../../components/cards/support.card'
import bgLeft from '../../assets/svg/support-left-bg.svg'
import bgRight from '../../assets/svg/support-right-bg.svg'

const Support = () => {
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
                mb: '290px',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(150px)',
                    zIndex: -1,
                    backgroundImage: `url(${bgLeft})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(150px)',
                    zIndex: -1,
                    backgroundImage: `url(${bgRight})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <Typography align={'center'} fontSize={30} fontWeight={600} mb={1}>
                No experience?
            </Typography>
            <Typography
                align={'center'}
                fontSize={30}
                color={'secondary'}
                mb={'20px'}
            >
                No worries
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {supportCardData.map((card, index) => (
                    <SupportCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        backgroundColor={card.backgroundColor}
                    />
                ))}
            </Box>
        </Container>
    )
}

export default Support
