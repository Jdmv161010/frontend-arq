import { AppBar, Toolbar, Typography } from '@mui/material';
import './Navbar.scss';

const Navbar = () => {
  return (
    <AppBar position="absolute" className="Navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Frontend Arq
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
