import React from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SpaIcon from '@material-ui/icons/Spa';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
        <BottomNavigationAction label="Discover" component={Link} to="/awakeriwetlands" icon={<SpaIcon />} />
        <BottomNavigationAction label="Map" component={Link} to="/map" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Report" component={Link} to="/report" icon={<MailIcon />} />
    </BottomNavigation>
  );
}