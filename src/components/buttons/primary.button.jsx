import React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

const ButtonPrimary = ({ text, onClick, sx }) => {
    const theme = useTheme()

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            sx={{
                ...sx,
                textTransform: 'none',
                color: theme.palette.secondary.dark,
                width: sx?.width || '158px',
                height: sx?.height || '42px',
                borderRadius: '5px',
                fontSize: '14px',
            }}
        >
            {text}
        </Button>
    )
}

export default ButtonPrimary
