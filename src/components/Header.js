import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

function Header() {
    const { user, loggedIn, setUser, setLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        setLoggedIn(false);
        navigate('/login');
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
                    <>
                        <Button color="inherit" component={Link} to="/staff">
                            Staff Dashboard
                        </Button>
                        <Button color="inherit" component={Link} to="/staff/manage-products">
                            Manage Products
                        </Button>
                        <Button color="inherit" component={Link} to="/staff/add-product">
                            Add Product
                        </Button>
                        <Button color="inherit" component={Link} to="/staff/add-stock">
                            Add Stock
                        </Button>
                    </>
                )}
                {loggedIn ? (
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button color="inherit" onClick={() => navigate('/login')}>
                        Login
                    </Button>
                )}
                <Link to="/cart" style={{ color: 'inherit' }}>
                    <IconButton color="inherit">
                        <Badge badgeContent={0} color="secondary"> {/* Update with cart items count */}
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
