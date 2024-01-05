import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import mainImage from '../../assets/images/wallet-bg.png'
import ButtonSecondary from '../../components/buttons/secondary.button'
import bgLeft from '../../assets/svg/exchange-left-bg.svg'

const TopAdBlock = () => {
    const theme = useTheme()

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: '9px 0',
                mb: '200px',
                position: 'relative',
            }}
        >
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
            <Box pt={14}>
                <Typography fontSize={56} fontWeight={500}>
                    Streamline Your Purchasing Power With{' '}
                    <span
                        style={{
                            color: theme.palette.secondary.main,
                            fontSize: '56px',
                            fontWeight: '900',
                        }}
                    >
                        Crypto
                    </span>
                </Typography>
                <Typography
                    mt={1}
                    fontSize={20}
                    lineHeight={'35px'}
                    color={theme.palette.primary.light}
                    pr={4}
                >
                    Buy real products effortlessly and securely, unlocking a
                    world of convenience
                </Typography>
                <ButtonSecondary text={'Explore Now'} />
            </Box>
            <Box>
                <Box
                    component="img"
                    src={mainImage}
                    alt="Wallet"
                    style={{ maxWidth: '745px', height: 'auto' }}
                />
            </Box>
        </Container>
    )
}

export default TopAdBlock
