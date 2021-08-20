import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

//Flickr Test
class Flickr extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: []
    };
  }

  componentDidMount() {
    //fetch("https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=3103f8ab8cd0e9ed3b325938f3145f95&gallery_id=72157647277042064&format=json&nojsoncallback=1")
    fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=3103f8ab8cd0e9ed3b325938f3145f95&photoset_id=72157719262174103&format=json&nojsoncallback=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            photos: result.photoset.photo
          });
          
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, photos } = this.state;
    console.log(this.state);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container maxWidth="sm" spacing={3}>
          <Grid item xs={12}><h1>Flickr Photos</h1></Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              {photos.map(photo => (
                <Card key={photo.id}>
                  <CardActionArea>
                    <CardMedia
                    className='flickrImg'
                    image={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                    title={photo.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">{photo.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      );
    }
  }

}

export default Flickr;