// src/pages/RegisterUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function RegisterUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Customer'); // Default role is Customer
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://localhost:7047/api/Auth/register', {
                username,
                password,
                role
            });
            alert(response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Error registering user');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <Typography variant="h5">Register User</Typography>
                <TextField
                    margin="normal"
                    fullWidth
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Select
                    fullWidth
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ mt: 2 }}
                >
                    <MenuItem value="Customer">Customer</MenuItem>
                    <MenuItem value="Employee">Employee</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleRegister}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
}

export default RegisterUser;
