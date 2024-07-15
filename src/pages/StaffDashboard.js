import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function StaffDashboard() {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Staff Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" color="primary" component={Link} to="/staff/add-product" fullWidth>
                        Add Product
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" color="primary" component={Link} to="/staff/manage-products" fullWidth>
                        Manage Products
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button variant="contained" color="primary" component={Link} to="/staff/add-stock" fullWidth>
                        Add Stock
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default StaffDashboard;
