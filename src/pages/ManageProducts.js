// src/pages/ManageProducts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://localhost:7047/api/Products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    const handleDeleteProduct = async (productId) => {
        try {
            await axios.delete(`https://localhost:7047/api/Products/${productId}`);
            setProducts(products.filter(product => product.prod_ID !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleSaveProduct = async () => {
        try {
            await axios.put(`https://localhost:7047/api/Products/${editingProduct.prod_ID}`, editingProduct);
            setProducts(products.map(product =>
                product.prod_ID === editingProduct.prod_ID ? editingProduct : product
            ));
            setEditingProduct(null);
        } catch (error) {
            console.error('Error saving product:', error);
        }
    };

    const handleCancel = () => {
        setEditingProduct(null);
    };

    const handleCancelManage = () => {
        navigate('/staff');
    };

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Manage Products
                </Typography>
                <Grid container spacing={3}>
                    {products.map(product => (
                        <Grid item xs={12} key={product.prod_ID}>
                            <Paper style={{ padding: '16px', marginBottom: '8px' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="h6">{product.name}</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body1">{product.price}</Typography>
                                    </Grid>
                                    <Grid item xs={4} style={{ textAlign: 'right' }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            style={{ marginRight: '8px' }}
                                            onClick={() => handleEditProduct(product)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => handleDeleteProduct(product.prod_ID)}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
                {editingProduct && (
                    <Box mt={5}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <Typography variant="h5">
                                    Edit Product
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleSaveProduct}
                                >
                                    Save Changes
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={editingProduct.name}
                            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                        />
                        <TextField
                            label="Product Price"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={editingProduct.price}
                            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                        />
                        <TextField
                            label="Product Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={editingProduct.description}
                            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                        />
                    </Box>
                )}
                {!editingProduct && (
                    <Box mt={5}>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            onClick={handleCancelManage}
                        >
                            Cancel
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
}

export default ManageProducts;
