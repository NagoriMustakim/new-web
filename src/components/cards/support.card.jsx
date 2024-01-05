import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

const SupportCard = ({ image, title, description, backgroundColor }) => {
    return (
        <Card
            sx={{
                maxWidth: '380px',
                m: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                boxShadow: 'none',
                border: 'none',
                backgroundColor,
                borderRadius: '15px',
                padding: '25px',
            }}
        >
            <Box sx={{ width: '50%' }}>
                <CardMedia
                    component="img"
                    width="176px"
                    image={image}
                    alt={title}
                />
            </Box>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={'24px'}
                    fontFamily={'Poppins'}
                >
                    {title}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography
                    gutterBottom
                    component="div"
                    fontSize={'14px'}
                    fontFamily={'Poppins'}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SupportCard
