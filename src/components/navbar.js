import Link from 'next/link';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { Logout } from '@mui/icons-material';

const Navbar = () => {
  const handleLogout = () => {
    // Handle logout logic
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#333', height: '100vh' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            height: '100%',
            paddingTop: '2rem', // Added padding at the top
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 'auto',
              '& > :not(style) + :not(style)': {
                marginTop: '1rem', // Added margin between buttons
              },
            }}
          >
            <Link href="/" passHref>
              <Button
                color="inherit"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: 'yellow', // Change the text color on hover
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/search" passHref>
              <Button
                color="inherit"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: 'yellow', // Change the text color on hover
                  },
                }}
              >
                Search
              </Button>
            </Link>
            <Link href="/post" passHref>
              <Button
                color="inherit"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: 'yellow', // Change the text color on hover
                  },
                }}
              >
                Posts
              </Button>
            </Link>
            <Link href="/live" passHref>
              <Button
                color="inherit"
                sx={{
                  color: '#fff',
                  '&:hover': {
                    color: 'yellow', // Change the text color on hover
                  },
                }}
              >
                Live
              </Button>
            </Link>
          </Box>

          <IconButton
            color="inherit"
            onClick={handleLogout}
            sx={{
              '&:hover': {
                color: 'red', // Change the icon color on hover
              },
            }}
          >
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
