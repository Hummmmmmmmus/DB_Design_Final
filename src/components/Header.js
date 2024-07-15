import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../CartContext';
import { UserContext } from '../UserContext';

function Header() {
    const { cart } = useContext(CartContext);
    const { user, loggedIn, setUser, setLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if ((!loggedIn || user.role !== 'staff') && location.pathname.startsWith('/staff')) {
            navigate('/');
        }
    }, [user.role, loggedIn, location, navigate]);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    const handleLogout = () => {
        setUser({ role: 'customer' });
        setLoggedIn(false);
        navigate('/');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                        DataPlace
                    </Link>
                </Typography>
                {loggedIn && user.role === 'staff' && (
                    <Link to="/staff" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <Button color="inherit">
                            Staff Dashboard
                        </Button>
                    </Link>
                )}
                {loggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                ) : (
                    <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                )}
                <Link to="/cart" style={{ color: 'inherit' }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
