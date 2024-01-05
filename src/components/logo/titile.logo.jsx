import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TitleLogo = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
            }}
        >
            <Box sx={{ display: 'flex', paddingTop: '5px' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Nunito',
                        fontSize: '29px',
                        marginRight: '4px',
                    }}
                >
                    Meta
                </Typography>
                <Box sx={{ position: 'relative' }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontFamily: 'Nunito',
                            fontSize: '29px',
                            fontWeight: 900,
                        }}
                    >
                        Market
                    </Typography>
                    <Typography
                        sx={{
                            color: '#000',
                            fontFamily: 'Poppins',
                            fontSize: '6px',
                            position: 'absolute',
                            top: '27px',
                            left: '19px',
                        }}
                    >
                        Buy and Sell using crypto
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TitleLogo
