import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import woman from '../../assets/images/woman-payment.png'
import ButtonSecondary from '../../components/buttons/secondary.button'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const PaymentAccept = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                marginBottom: '270px',
            }}
        >
            <Box flex={1}>
                <Box
                    component="img"
                    src={woman}
                    alt="Payment"
                    style={{
                        maxWidth: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                flex={1}
                pt={'200px'}
            >
                <Box
                    padding={'142px 82px'}
                    bgcolor="#F2F9FF"
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >
                    <Typography
                        mb={3}
                        fontSize={'40px'}
                        justifyContent={'center'}
                    >
                        We accept payment in crypto
                    </Typography>
                    <Box display="flex">
                        <CardWithIcon
                            title="Say goodbye to tedious authorization processes and hello to instant gratification"
                            content="By embracing cryptocurrency, we enable you to complete transactions swiftly, ensuring that your desired products reach your doorstep in no time"
                        />
                        <CardWithIcon
                            title="Your time is available, and we’re committed to providing you with the most efficient buying process possible"
                            content="Join us in the movement towards decentralized finance and experience the freedom to control your money like never before"
                        />
                    </Box>
                    <Box display={'flex'} alignSelf={'flex-start'}>
                        <ButtonSecondary text="Join us" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

const CardWithIcon = ({ title, content }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            flex={1}
            padding={'23px'}
            position={'relative'}
        >
            <CheckCircleIcon
                color={'secondary'}
                sx={{
                    position: 'absolute',
                    height: '30px',
                    left: '8px',
                    top: '20px',
                }}
            />
            <Typography
                variant="h5"
                fontSize={'20px'}
                style={{ marginLeft: '20px' }}
            >
                {title}
            </Typography>
            <Typography
                variant="body1"
                color="textSecondary"
                mt={2}
                fontSize={'16px'}
                style={{ marginLeft: '20px' }}
            >
                {content}
            </Typography>
        </Box>
    )
}

export default PaymentAccept
