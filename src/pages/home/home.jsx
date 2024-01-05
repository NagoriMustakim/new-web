import React from 'react'
import Box from '@mui/material/Box'
import TopAdBlock from './top-ad.home'
import ExchangeService from './exchange-service.home'
import PaymentAccept from './payment-accept.home'
import SupportHome from './support.home'
import CreateAccount from './create-account'
import Partners from './partners'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

const HomePage = () => {
    return (
        <Box>
            <Header/>
            <TopAdBlock/>
            <ExchangeService/>
            <PaymentAccept/>
            <SupportHome/>
            <CreateAccount/>
            <Partners/>
            <Footer/>
        </Box>
    )
}

export default HomePage
