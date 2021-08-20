import React from 'react';
import Button from '@material-ui/core/Button';
import DirectionsIcon from '@material-ui/icons/Directions';

class Map extends React.Component {
    render() {
        return (
            <>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1DXj0Qt1YC_Zx9zmQR5GvXuaTYUWPt2Vx" width="100%" height="480" title="map" className="map"></iframe>
            <Button href="https://www.google.co.nz/maps/dir//Awakeri+Wetlands+10+Saddleback+Crescent,+Papakura,+Auckland+2110/@-37.0494959,174.9499831" target="_blank" variant="contained" startIcon={<DirectionsIcon />} className="btn-green btn-directions">Directions</Button>
            </>
        );
    }
}

export default Map;