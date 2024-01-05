import { Box } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import Home from './pages/home/home'
import About from './pages/about/about'
import  { Metamask } from '../src/pages/home/Metamask'

function App() {
    return (
        <Box>
            <BrowserRouter>
                <ThemeProvider theme={theme}>                  
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/metamask" element={<Metamask/>}/>
                    </Routes>                
                </ThemeProvider>
            </BrowserRouter>
        </Box>
    )
}

export default App
