import { Box, InputBase, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import { fetchBooks } from '../../redux/slices/books/booksAction'
import BookCard from '../../components/Card/Card'
import './Home.css'


const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state?.login?.content?.response)
    console.log(user?.existingUser?.role)
    const role = user?.existingUser?.role

    const token = user?.token

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispatch(fetchBooks(token))
    }, [dispatch, token])

    const books = useSelector((state) => state?.books?.content)
    const loading = useSelector((state) => state?.books?.isLoading)
    const error = useSelector((state) => state?.books?.error)
    console.log(books)

    const handleSearch = async (e) => {
        await setSearch(e.target.value)
        const inputs = { body: search, token }

    }

    if (error) {
        return error.message
    }

    return (
        <Box>
            <Navbar role={role} />

            <Stack alignItems={'center'} sx={{ margin: '40px auto' }}>
                <InputBase
                    placeholder='search book'
                    startAdornment={<SearchIcon />}
                    sx={{
                        border: '1px solid black',
                        borderRadius: '10px'
                    }}
                    value={search}
                    onChange={(e) => handleSearch(e)}
                />
                <Box className="card-container">
                    {
                        loading && <>Loading...</>
                    }
                    {
                        books &&
                        books?.length > 0 &&
                        books?.map((item) => {
                            return (

                                <BookCard item={item} />

                                // console.log(item.title)
                            )
                        })
                    }
                </Box>


            </Stack>


        </Box>
    )
}

export default Home
