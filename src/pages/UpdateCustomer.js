import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function UpdateCustomer() {
    const [customer, setCustomer] = useState({
        cust_ID: '',
        name: '',
        address: '',
        balance: 0,
        ccInfos: [],
        addresses: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({ ...prevState, [name]: value }));
    };

    const handleUpdate = async () => {
        try {
            await axios.post('https://localhost:7047/api/Customers/update', customer);
            alert('Customer updated successfully');
        } catch (error) {
            console.error('Error updating customer:', error);
        }
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
                <Typography variant="h5">Update Customer</Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Name"
                    name="name"
                    value={customer.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Address"
                    name="address"
                    value={customer.address}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Balance"
                    name="balance"
                    type="number"
                    value={customer.balance}
                    onChange={handleChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleUpdate}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Update
                </Button>
            </Box>
        </Container>
    );
}

export default UpdateCustomer;
