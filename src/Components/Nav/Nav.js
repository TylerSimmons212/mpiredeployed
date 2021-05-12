import React, {
    useEffect
} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../images/mpirelogo.png';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import './nav.css';

const useStyles = makeStyles({
    list: {
        width: 250,
        marginTop: 25,
    },
    fullList: {
        width: 'auto',
    },
});



const Nav = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
 
    useEffect(() => {

    }, [])

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

              <a href="/#usvothers">
                <ListItem button key='HIGHLIGHTS' className="listitem" >
                  <ListItemText  />
                  <ListItemText primary='HIGHLIGHTS' />
                </ListItem>
              </a>
              <a href="/#aboutus">
                <ListItem button key='ABOUT US' className="listitem" >
                  <ListItemText  />
                  <ListItemText primary='ABOUT US' />
                </ListItem>
              </a>
              <a href="/#results">
                <ListItem button key='CLIENT RESULTS' className="listitem" >
                  <ListItemText  />
                  <ListItemText primary='CLIENT RESULTS' />
                </ListItem>
              </a>
              <a href="/#capabilities">
                <ListItem button key='OUR SERVICES' className="listitem" >
                  <ListItemText  />
                  <ListItemText primary='OUR SERVICES' />
                </ListItem>
              </a>
          </List>
          <Divider />
          <div className="contactbtn">
            <Button variant="contained" onClick={() => { props.setForm(true) }} className="contactbtntxt">
                CONTACT US
            </Button>
          </div>
        </div>
      );

    return ( 
    <div className = 'nav' >
        <React.Fragment key='left'>
          <MenuIcon onClick={toggleDrawer('left', true)} className="menuicon" fontSize="large"></MenuIcon>
          <Drawer anchor='left' open={state.left} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
        <img src={logo} alt="mpire logo" />
        <div class="spacer">
          <Button variant="contained" onClick={() => { props.setForm(true) }} className="contactbtntxt">
                  CONTACT
          </Button>
        </div>
    </div>
    )
}

export default Nav
