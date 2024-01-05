import React from 'react'
import Box from '@mui/material/Box'
import TitleLogo from './titile.logo'
import logo from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

const Logo = ({ sx }) => {
    const defaultSx = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
    }

    return (
        <Box
            component={Link}
            to={'/'}
            sx={{
                ...defaultSx,
                ...sx,
            }}
            role="img"
            aria-label="Logo"
        >
            <Box
                component="img"
                style={{ height: '25px', width: '28px' }}
                src={logo}
                alt="Logo"
            />
            <TitleLogo />
        </Box>
    )
}

export default Logo
