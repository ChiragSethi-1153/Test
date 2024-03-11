import { Box, Button, Divider, Stack } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import AddBook from '../../components/AddBook/AddBook'

const Dashboard = () => {

    const [modal , setModal ] = useState(false)

    const user = useSelector((state) => state?.login?.content?.response)
    console.log(user?.existingUser?.role)
    const role = user?.existingUser?.role

    const token = user?.token

    const handleClose = () => {
        setModal(false)
    }

    return (
        <Box >

            <Navbar role={role} />

            <Stack flexDirection={'row'}  >

                <Stack alignItems={'çenter'} sx={{ boxSizing: 'border-box', borderRight: '1px solid black' , height: '900px', width: '200px'}}>
                    <Button sx={{marginTop: '20px'}} onClick={() => setModal(true)}>
                        Add Book
                    </Button>
                    {
                        modal && <AddBook hide={handleClose} />
                    }
                </Stack>

                <Stack>
                    
                </Stack>
            </Stack>

        </Box>
    )
}

export default Dashboard
