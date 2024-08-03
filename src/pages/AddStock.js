// src/pages/AddStock.js
import React, { useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

function AddStock() {
    const [productId, setProductId] = useState('');
    const [warehouseId, setWarehouseId] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleAddStock = async () => {
        try {
            await axios.post('https://localhost:7047/api/Stocks', {
                prod_ID: parseInt(productId),
                ware_ID: parseInt(warehouseId),
                count: parseInt(quantity)
            });
            setProductId('');
            setWarehouseId('');
            setQuantity('');
            navigate('/staff');
        } catch (error) {
            console.error('Error adding stock:', error);
        }
    };

    const handleCancel = () => {
        navigate('/staff');
    };

    return (
        <Container>
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Add Stock
                </Typography>
                <Box component="form" mt={3}>
                    <TextField
                        label="Product ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <TextField
                        label="Warehouse ID"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={warehouseId}
                        onChange={(e) => setWarehouseId(e.target.value)}
                    />
                    <TextField
                        label="Quantity"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddStock}
                        style={{ marginTop: '20px' }}
                    >
                        Add Stock
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

export default AddStock;
