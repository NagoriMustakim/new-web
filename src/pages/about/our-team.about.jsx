import React from 'react'
import Box from '@mui/material/Box'
import ourTeam from '../../assets/images/our-team.png'
import bg1 from '../../assets/images/team-bg-5.png'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

const OurTeam = () => {
    const theme = useTheme()
    return (
        <Box
            sx={{
                height: '800px',
                position: 'relative',
                marginBottom: '20vh',
                display: 'flex',
                backgroundColor: 'inherit',
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderTop: '1px solid rgba(0, 0, 0, .5)',
            }}
        >
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                }}
            >
                <Typography
                    color={theme.palette.secondary.dark}
                    fontSize={'36px'}
                    fontWeight={'600'}
                    display={'flex'}
                    alignContent={'center'}
                    flexWrap={'wrap'}
                    justifyContent={'center'}
                    width={'100%'}
                    height={'400px'}
                    sx={{ backgroundColor: '#FFF8E6' }}
                >
                    Our team
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                }}
            ></Box>
            <Box sx={{ position: 'relative' }}>
                <Box
                    component="img"
                    src={ourTeam}
                    alt="Our team"
                    sx={{
                        position: 'absolute',
                        right: '150px',
                        top: '14px',
                        transform: 'rotate(3deg)',
                    }}
                />
            </Box>
        </Box>
    )
}

export default OurTeam
