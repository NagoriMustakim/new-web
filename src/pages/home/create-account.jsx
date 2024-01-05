import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import ButtonSecondary from '../../components/buttons/secondary.button'
import man from '../../assets/images/man-laptop.png'

const CrateAccount = () => {
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
                mb: '137px',
            }}
        >
            <Box
                sx={{
                    background: theme.palette.secondary.darker,
                    width: '80%',
                    height: '100%',
                    position: 'relative',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >
                <Box sx={{ padding: '82px 92px 52px 92px' }}>
                    <Typography fontSize={'40px'} color={'#FFFFFF'}>
                        Start shopping using
                    </Typography>
                    <Typography
                        fontSize={'40px'}
                        color={'primary'}
                        fontWeight={'900'}
                        fontFamily={'Poppins'}
                        mb={'55px'}
                    >
                        Crypto
                    </Typography>
                    <ButtonSecondary
                        sx={{ width: '339px' }}
                        text={'Create an account'}
                    />
                </Box>
                <Box
                    component="img"
                    src={man}
                    alt={'Crypto'}
                    style={{
                        position: 'absolute',
                        width: '580px',
                        height: 'auto',
                        left: '490px',
                        bottom: '-7px',
                    }}
                />
            </Box>
        </Container>
    )
}

export default CrateAccount
