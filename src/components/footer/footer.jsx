import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import Logo from '../logo/logo'
import { footerListsItems } from './menu-li-data.footer'
import bgLeft from '../../assets/svg/footer-left-bg.svg'
import bgRight from '../../assets/svg/footer-right-bg.svg'

const Footer = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                p: '9px 0',
                mb: 0,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    padding: '82px 0',
                    marginBottom: '36px',
                    background: '#FFFFFF',
                    borderRadius: '50px',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        right: '435px',
                        bottom: '100px',
                        width: '100%',
                        height: '100%',
                        filter: 'blur(150px)',
                        transform: 'rotate(-163deg)',
                        zIndex: -1,
                        backgroundImage: `url(${bgLeft})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        left: '750px',
                        right: '0',
                        width: '100%',
                        height: '100%',
                        filter: 'blur(150px)',
                        transform: 'rotate(3deg)',
                        zIndex: -1,
                        backgroundImage: `url(${bgRight})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginRight: '15px',
                    }}
                >
                    <Logo
                        sx={{
                            marginTop: '6px',
                            marginLeft: '70px',
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    />

                    {footerListsItems.map((list, index) => (
                        <List
                            key={index}
                            sx={{ marginTop: list.title ? '0' : '32px' }}
                        >
                            {list.title && (
                                <Typography
                                    variant="h6"
                                    fontSize={'20px'}
                                    fontWeight={'600'}
                                >
                                    {list.title}
                                </Typography>
                            )}
                            {list.items.map((item, itemIndex) => (
                                <ListItem
                                    key={itemIndex}
                                    sx={{ padding: '5px 5px 0 0' }}
                                    fontSize={'20px'}
                                >
                                    <Link
                                        href={item.link}
                                        color="inherit"
                                        sx={{
                                            textDecoration: 'none',
                                            color: 'inherit',
                                        }}
                                    >
                                        <ListItemText primary={item.text} />
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    ))}
                </Box>
            </Box>
            <Typography fontSize={'24px'}>ⓒ metamarket.com 2023</Typography>
        </Container>
    )
}

export default Footer
