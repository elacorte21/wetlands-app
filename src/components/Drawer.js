import React from 'react';
import { Link } from 'react-router-dom';
//import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Apps';
import logo from '../assets/media/logo-aw.svg';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import VisibleItemList from '../containers/VisibleItemList'
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  h4: {
    fontSize: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#BBD629',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  
  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/"><img src={logo} alt="Awakeri Wetlands" width="80%" /></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem><h4>Discover</h4></ListItem>
        <ListItem button component={Link} to="/awakeriwetlands">About</ListItem>
        <ListItem button component={Link} to="/history">History</ListItem>
        <ListItem button component={Link} to="/manawhenua">Mana Whenua</ListItem>
        <ListItem button component={Link} to="/florafauna">Flora and Fauna</ListItem>
        <ListItem button component={Link} to="/tidykiwi">Tidy Kiwi</ListItem>
        <ListItem button component={Link} to="/areas">Areas of Interest</ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/map"><h4>Our Location</h4></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/community"><h4>Connecting Community</h4></ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/report"><h4>Report</h4></ListItem>
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />

      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClick={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon/>
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
    </>
  );
}

export default ResponsiveDrawer;
