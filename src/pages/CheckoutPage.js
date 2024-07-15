import React, { useContext, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CartContext } from '../CartContext';

function CheckoutPage() {
    const { cart, clearCart } = useContext(CartContext);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        // For now, we'll just clear the cart and set orderPlaced to true
        clearCart();
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <Container>
                <Box mt={5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Typography variant="h4" gutterBottom>
                        Order Placed
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Thank you for your purchase!
                    </Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Container>
            <Box mt={5} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Typography variant="h4" gutterBottom>
                    Checkout
                </Typography>
                <Box component="form" mt={3} width="100%" maxWidth="500px">
                    <TextField
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Card Holder Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Expiry Date"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="CVV"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handlePlaceOrder}
                        style={{ marginTop: '20px' }}
                    >
                        Place Order
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default CheckoutPage;
