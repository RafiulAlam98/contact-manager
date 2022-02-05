import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useAuth from './../../../hooks/useAuth/useAuth';
import DashboardLink from './DashboardLink/DashboardLink';
import DashboardRoute from './DashboardRoute/DashboardRoute';



   const drawerWidth = 200;

const Dashboard = (props) => {
      
        function Item(props) {
          const { sx, ...other } = props;
          return (
            <Box
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 1,
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: '700',
                ...sx,
              }}
              {...other}
            />
          );
        }
        Item.propTypes = {
          sx: PropTypes.oneOfType([
            PropTypes.arrayOf(
              PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
            ),
            PropTypes.func,
            PropTypes.object,
          ]),
        };

     const {user,userSignOut} = useAuth()
    
      const { window } = props;
      const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography sx={{m:3, color:'black'}} variant="h5" noWrap component="div">
            Contact Manager
      </Typography>
      <Toolbar />
      
      <DashboardLink></DashboardLink>
        
      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
     return (
          <>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />

                <AppBar
                  position="fixed"
                  sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                  }}
                >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        m: 1,
                      }}
                    >
                      <Toolbar>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Item>
                          Welcome  {user.displayName}
                        </Item>
                        <Item>
                          <Button sx={{ ml: 1, color: 'white' }}>
                          <NotificationsIcon></NotificationsIcon>
                          </Button>
                        </Item>
                        <Item>
                          <Button 
                          sx={{ml:2,color:'white'}}
                          onClick={userSignOut}
                          ><LogoutIcon></LogoutIcon>
                          </Button>
                        </Item>
                        <Item>
                         
                        </Item>
                      </Toolbar>
                    </Box>
                </AppBar>

                <Box
                  component="nav"
                  sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                  aria-label="mailbox folders"
                >
                
                  <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                      keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                  >
                    {drawer}
                  </Drawer>
                  <Drawer
                    variant="permanent"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                  >
                    {drawer}
                  </Drawer>
                </Box>

                <Box
                  component="main"
                  sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                  <Toolbar />
                  <DashboardRoute></DashboardRoute>
                </Box>
                
            </Box>
          </>
     );
};

export default Dashboard;