import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'

const PartnersCard = ({ image, padding }) => {
    return (
        <Card
            sx={{
                textAlign: 'center',
                boxShadow: 'none',
                border: 'none',
                padding: padding || '16px',
                display: 'flex',
                margin: '5px',
                overflow: 'hidden',
                backgroundColor: 'inherit',
            }}
        >
            <CardMedia
                component="img"
                height="auto"
                image={image}
                alt={'Partners image'}
            />
        </Card>
    )
}

export default PartnersCard
