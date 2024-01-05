import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleModalCloseClick = () => {
        setAnchorEl(null)
    }

    return (
        <Box
            sx={{ display: 'flex', alignItems: 'center', marginRight: '44px' }}
        >
            <Typography>Explore</Typography>
            <IconButton
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleModalCloseClick}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleModalCloseClick}>Profile</MenuItem>
                <MenuItem onClick={handleModalCloseClick}>My account</MenuItem>
                <MenuItem onClick={handleModalCloseClick}>Logout</MenuItem>
            </Menu>
        </Box>
    )
}

export default DropdownMenu
