import { AppBar, Box, Button,  Stack } from '@mui/material'
import React from 'react'
import './Navbar.css'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = ({role}) => {
    console.log(role)

    const navigate = useNavigate()

    return (
        <Box sx={{ height: '58px', marginBottom: '10px' }}>
            <AppBar className='appbar'>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box sx={{marginLeft: '20px'}}>
                    <Logo />
                    </Box>
                    <Stack flexDirection={'row'} gap={2}>
                        <Button onClick={() => navigate('/home')}>Home</Button>
                       { role === 'admin' ? <Button onClick={() => navigate('/dashboard')}>Dashboard</Button> : <></> }

                    </Stack>
                    <Stack sx={{marginRight: '30px'}}>
                        <Button variant='contained' onClick={() => navigate('/login')}> 
                            Logout
                        </Button>
                    </Stack>
                </Stack>

            </AppBar>
        </Box>
    )
}

export default Navbar
