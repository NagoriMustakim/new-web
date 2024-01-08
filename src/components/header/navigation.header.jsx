import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Services', path: '/' },
    { text: 'Our Partner', path: '/' },
]

const Navigation = () => {
    const location = useLocation()

    return (
        <Box sx={{ display: 'flex', flex: '2', marginLeft: '50px' }}>
            {menuItems.map((menuItem, index) => (
                <Typography
                    key={index}
                    component={Link}
                    to={menuItem.path}
                    sx={{
                        padding: '0 25px',
                        fontSize: '16px',
                        fontWeight:
                            location.pathname === menuItem.path ? 500 : 400,
                        color:
                            location.pathname === menuItem.path
                                ? 'black'
                                : 'rgba(0, 0, 0, 0.50)',
                        cursor: 'pointer',
                        textDecoration: 'none',
                    }}
                >
                    {menuItem.text}
                </Typography>
            ))}
        </Box>
    )
}

export default Navigation
