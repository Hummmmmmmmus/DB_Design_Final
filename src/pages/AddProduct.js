import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [productType, setProductType] = useState('');
    const [productBrand, setProductBrand] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const navigate = useNavigate();

    const handleAddProduct = async () => {
        try {
            const response = await axios.post('https://localhost:7047/api/Employees/product', {
                name: productName,
                type: productType,
                brand: productBrand,
                description: productDescription,
                size: parseFloat(productSize),
                price: parseFloat(productPrice)
            });

            console.log('Product added:', response.data);
            setProductName('');
            setProductType('');
            setProductBrand('');
            setProductDescription('');
            setProductSize('');
            setProductPrice('');
            navigate('/staff');
        } catch (error) {
            console.error('Error adding product:', error.response.data);
            alert('Error adding product: ' + JSON.stringify(error.response.data));
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
                        label="Product Type"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                    />
                    <TextField
                        label="Product Brand"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productBrand}
                        onChange={(e) => setProductBrand(e.target.value)}
                    />
                    <TextField
                        label="Product Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                    <TextField
                        label="Product Size"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={productSize}
                        onChange={(e) => setProductSize(e.target.value)}
                    />
                    <TextField
                        label="Product Price"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
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
