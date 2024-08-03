// src/pages/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const navigate = useNavigate();

    const handleAddProduct = async () => {
        try {
            await axios.post('https://localhost:7047/api/Products', {
                name: productName,
                price: parseFloat(productPrice),
                description: productDescription
            });
            setProductName('');
            setProductPrice('');
            setProductDescription('');
            navigate('/staff');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleCancel = () => {
        navigate('/staff');
    };

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Add Product
                </Typography>
                <Box component="form" mt={3}>
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                    <TextField
                        label="Product Price"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                    <TextField
                        label="Product Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddProduct}
                        style={{ marginTop: '20px' }}
                    >
                        Add Product
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleCancel}
                        style={{ marginTop: '10px' }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default AddProduct;
