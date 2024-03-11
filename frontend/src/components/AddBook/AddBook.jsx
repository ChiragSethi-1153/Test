import { Box, Button, FormControl, Input, InputLabel, TextField, styled } from '@mui/material'
import React, { useState } from 'react'
import '../../pages/Dashboard/Dashboard.css'
import { useDispatch, useSelector } from 'react-redux';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { addBooks } from '../../redux/slices/books/booksAction';

const AddBook = ({ hide }) => {

    const user = useSelector((state) => state?.login?.content?.response)
    const token = user?.token

    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    const [inputs, setInputs] = useState({ title: "", author: "", quantity: '', genre: '' });
    const [images, setImages] = useState([]);
    const dispatch = useDispatch();


    const handleImage = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(inputs)
            const formData = new FormData();
            await formData.append("title", inputs.title);
            await formData.append("author", inputs.author);
            await formData.append("genre", inputs.genre);
            await formData.append("quantity", inputs.quantity);

            await formData.append("images", images);
            for (let i = 0; i < images.length; i++) {
                formData.append("images", images[i]);
            }
            await dispatch(addBooks({formData, token}));
            hide()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Box>
            <Box
                className="modal-wrapper"
                onClick={() => hide()}
                style={{
                    position: " fixed",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    top: "0",
                    backgroundColor: "rgba(230, 226, 226, 0.804)",
                }}
            />
            <Box className="addBook">
                <FormControl sx={{ width: "100%", height: '100%' }} enctype="multipart/form-data">
                    <TextField
                        label="Title"
                        value={inputs.title}
                        required
                        onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
                        sx={{ width: "100%", marginBottom: '20px' }}
                    />
                    <TextField
                        label="Author"
                        required
                        value={inputs.author}
                        sx={{ width: "100%", marginBottom: '20px' }}
                        onChange={(e) => setInputs({ ...inputs, author: e.target.value })}
                    />
                    <TextField
                        label="Genre"
                        required
                        value={inputs.genre}
                        sx={{ width: "100%", marginBottom: '20px' }}
                        onChange={(e) => setInputs({ ...inputs, genre: e.target.value })}
                    />
                    <TextField
                        label="Stock"
                        required
                        type='number'
                        value={inputs.quantity}
                        sx={{ width: "100%", marginBottom: '20px' }}
                        onChange={(e) => setInputs({ ...inputs, quantity: e.target.value })}
                    />
                    <label htmlFor='images'>Add Cover Image</label>
                    <Button

                        component="label"
                        role={undefined}
                        variant="standard"
                        tabIndex={-1}
                        sx={{ width: "50%", marginBottom: '20px' }}
                        startIcon={<InsertPhotoIcon  sx={{color: '#1a76d2', width :'30px'}}/>}
                    >
                        <VisuallyHiddenInput
                            
                            type="file"
                            name="images"
                            multiple
                            onChange={(e) => {
                                handleImage(e);
                            }}
                        />
                    </Button>
                </FormControl>
                    <Button 
                    type="submit" 
                    
                    onClick={(e) => handleSubmit(e)}>
                        Add
                    </Button>
            </Box>
        </Box>
    )
}

export default AddBook
