import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Logo from '../logo/logo'
import Navigation from './navigation.header'
import DropdownMenu from '../dropdown-menu/dropdown-menu'
import WalletModal from '../modals/connect-walet-modal/connect-wallet.modal'
import ButtonPrimary from '../buttons/primary.button'

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        localStorage.removeItem('code')
        setIsModalOpen(false)
    }

    return (
        <Container
            role="header"
            maxWidth="lg"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                '@media (min-width: 600px)': {
                    paddingLeft: '0',
                    paddingRight: '0',
                },
                p: '18px 0',
            }}
        >
            <Box>
                <Logo />
            </Box>
            <Navigation />
            <Box sx={{ display: 'flex' }}>
                <DropdownMenu />
                <ButtonPrimary
                    text="Connect wallet"
                    onClick={handleModalOpen}
                />
            </Box>
            <WalletModal isOpen={isModalOpen} handleClose={handleModalClose} />
        </Container>
    )
}

export default Header
