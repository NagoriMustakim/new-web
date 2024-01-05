import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ButtonPrimary from '../../components/buttons/primary.button'
import CryptoCard from '../../components/cards/crypto.card'
import { cryptoCardData } from '../../components/cards/crypto-card.data'
import bgRight from '../../assets/svg/exhange-right-bg.svg'
import bgLeft from '../../assets/svg/exchange-left-bg.svg'

const ExchangeService = () => {
    const theme = useTheme()
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
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '150px',
                    top: '250px',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(150px)',
                    zIndex: -1,
                    backgroundImage: `url(${bgRight})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    right: '300px',
                    top: '0',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(150px)',
                    zIndex: -1,
                    backgroundImage: `url(${bgLeft})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            />
            <Typography
                align={'center'}
                fontSize={30}
                fontWeight={500}
                lineHeight={'35px'}
            >
                Crypto Escrow Marketplace
            </Typography>
            <Typography
                align={'center'}
                fontSize={16}
                fontWeight={500}
                lineHeight={'35px'}
                color={theme.palette.primary.light}
                mb={'55px'}
            >
                With Crypto Exchange’s Escrow Service, you can shop safely in
                our marketplce
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {cryptoCardData.map((card, index) => (
                    <CryptoCard
                        key={index}
                        image={card.image}
                        title={card.title}
                    />
                ))}
            </Box>
            <Box justifyContent={'center'} display={'flex'}>
                <ButtonPrimary
                    text="View more"
                    sx={{ width: '112px', height: '42px', marginTop: '40px' }}
                />
            </Box>
        </Container>
    )
}

export default ExchangeService
