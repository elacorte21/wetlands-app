import React from 'react';
import { Link } from 'react-router-dom';
//import video from '../assets/media/awvideo.mp4';
import Button from '@material-ui/core/Button';
import logo from '../assets/media/logo-aw.svg'

class Main extends React.Component {
    render(){
        return(
            <div className="splash">
                <img src={logo} className="logo" alt="Awakeri Wetlands" />
                <Button component={Link} to="/awakeriwetlands" variant="contained" color="primary" className="btn-discover">Discover</Button>
                {/*<video muted autoPlay loop playsinline src={video} type="video/mp4"></video>*/}
            </div>
        );
    }
}

export default Main;