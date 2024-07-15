import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { CartContext } from '../CartContext';

function CartPage() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                    Your cart is currently empty.
                </Typography>
            ) : (
                <div>
                    <Grid container spacing={2}>
                        {cart.map(item => (
                            <Grid item xs={12} key={item.id}>
                                <Paper style={{ padding: '16px', marginBottom: '8px' }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">{item.name}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">{item.price}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography variant="body1">Qty: {item.quantity}</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                                                Remove
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginRight: '8px' }}
                            onClick={() => navigate('/checkout')}
                        >
                            Proceed to Checkout
                        </Button>
                        <Button variant="contained" color="secondary" onClick={clearCart}>
                            Clear All
                        </Button>
                    </div>
                </div>
            )}
        </Container>
    );
}

export default CartPage;
