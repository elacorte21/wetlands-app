import React from 'react';
import { Link } from "react-router-dom";
import { getFirebase } from "../firebase";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import Image from '../assets/media/img-aw-03.jpg';

class FloraFauna extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
      search: ""
    };
  }

  componentDidMount() {
    let lang = '/en-US'
    let fbpath = 'flamelink/environments/production/content/'
    const dataRef = getFirebase().database().ref(fbpath + 'floraAndFauna' + lang)
    dataRef.on('value', (snapshot) => {
      let data = [];
      console.log(data);
      const snapshotVal = snapshot.val();
      for (let slug in snapshotVal) {
          data.push(snapshotVal[slug]);
          //console.log(slug + " - test");
      }

      this.setState({
        items: data,
        isLoaded: true,
        search: ""
      })
    });
  }

  onchange = e => {
    this.setState({ search: e.target.value });
  };
  
  render() {
    const { isLoaded, items, search } = this.state;
    const imgStyle = {
      height: 180,
      background: 'url(' + Image + ') center / cover no-repeat',
    };
    console.log(this.state)
    const filteredItems = items.filter(item => {
      return item.plantName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div style={imgStyle}></div>
          <Container maxWidth="sm" spacing={3}>
              <Grid item xs={12}><h1>Flora and Fauna</h1></Grid>
              <Grid item xs={12}>
                <TextField 
                  id="outlined-basic"
                  variant="outlined"
                  label="Search Plants"
                  icon={Search}
                  onChange={this.onchange}
                  style={{marginBottom: 40}}
                />
              </Grid>
              <Grid container spacing={3}>
                {filteredItems.map(item => (
                  <Grid item xs={12} sm={6}>
                    <Card key={item.id}>
                      <CardActionArea>
                        <CardMedia
                        className='media'
                        image={item.image}
                        title={item.plantName}
                        component={Link} to={`/${item.id}`}
                        >
                            <span className="cardCat">{item.latinName}</span>
                        </CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">{item.plantName}</Typography>
                            <Button size="small" color="primary" component={Link} to={`/${item.id}`}>Learn more</Button>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
          </Container>
        </>
      );
    }
  }
}

export default FloraFauna;