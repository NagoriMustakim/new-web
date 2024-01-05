import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const CryptoCard = ({ image, title }) => {
    return (
        <Card
            sx={{
                minWidth: 250,
                maxWidth: 345,
                m: 2,
                textAlign: 'center',
                boxShadow: 'none',
                border: 'none',
                backgroundColor: 'inherit',
            }}
        >
            <CardMedia
                component="img"
                height="220"
                image={image}
                alt={'Partners image'}
            />
            <Typography
                fontSize={'30px'}
                fontWeight={'500'}
                lineHeight={'35px'}
                pt={'24px'}
            >
                {title}
            </Typography>
        </Card>
    )
}

export default CryptoCard
