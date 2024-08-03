import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        prod_ID: '',
        name: '',
        type: '',
        brand: '',
        description: '',
        size: 0,
        price: 0
    });

    const fetchProducts = async () => {
        const response = await axios.get('https://localhost:7047/api/Products');
        setProducts(response.data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSave = async () => {
        try {
            if (product.prod_ID) {
                await axios.put(`https://localhost:7047/api/Employees/product/${product.prod_ID}`, product);
                alert('Product updated successfully');
            } else {
                await axios.post('https://localhost:7047/api/Employees/product', product);
                alert('Product created successfully');
            }
            fetchProducts();
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleEdit = (prod) => {
        setProduct(prod);
    };

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <Typography variant="h5">Manage Products</Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Type"
                    name="type"
                    value={product.type}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Brand"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Size"
                    name="size"
                    type="number"
                    value={product.size}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Price"
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save
                </Button>
                {products.map(prod => (
                    <Box key={prod.prod_ID} sx={{ mt: 2 }}>
                        <Typography variant="h6">{prod.name}</Typography>
                        <Button variant="outlined" onClick={() => handleEdit(prod)}>Edit</Button>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default ManageProducts;
