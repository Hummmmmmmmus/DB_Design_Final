import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
    { id: 1, name: 'Product 1', price: '$10', description: 'This is Product 1' },
    { id: 2, name: 'Product 2', price: '$20', description: 'This is Product 2' },
    { id: 3, name: 'Product 3', price: '$30', description: 'This is Product 3' },
];

function ManageProducts() {
    const [products, setProducts] = useState(initialProducts);
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const handleSaveProduct = () => {
        setProducts(products.map(product =>
            product.id === editingProduct.id ? editingProduct : product
        ));
        setEditingProduct(null);
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
                        <Grid item xs={12} key={product.id}>
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
                                            onClick={() => handleDeleteProduct(product.id)}
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
