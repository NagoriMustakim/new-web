import React from 'react'
import Button from '@mui/material/Button'

const ButtonSecondary = ({ text, onClick, sx }) => {
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={onClick}
            sx={{
                ...sx,
                textTransform: sx?.textTransform || 'none',
                color: sx?.color || '#ffffff',
                width: sx?.width || '278px',
                height: sx?.height || '80px',
                borderRadius: sx?.borderRadius || '5',
                fontSize: sx?.fontSize || '30px',
                fontWeight: sx?.fontWeight || '600',
                fontFamily: sx?.fontFamily || 'Inter',
                mt: sx?.mt || '17px',
            }}
        >
            {text}
        </Button>
    )
}

export default ButtonSecondary
