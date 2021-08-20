import React from 'react';
import { getFirebase } from "../firebase";
import '@firebase/storage';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Image from '../assets/media/img-aw-05.jpg'

class History extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    let lang = '/en-US'
    let fbpath = 'flamelink/environments/production/content/'
    const dataRef = getFirebase().database().ref(fbpath + 'history' + lang)
    dataRef.on('value', (snapshot) => {
      const data = snapshot.val();
      this.setState({
        items: [data],
        isLoaded: true
      })
      //console.log(this.state);
    });
      /* getFirebase().storage()
      .ref(`/flamelink/media/`)
      //.child()
      .getDownloadURL()
      .then( url => {
        console.log( "Got download url: ", url );
      }); */
  }

  render() {
    const { isLoaded, items } = this.state;
    const imgStyle = {
      height: 180,
      background: 'url(' + Image + ') center / cover no-repeat',
    };

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div style={imgStyle}></div>
          <Container maxWidth="sm" spacing={3}>
            <Grid item xs={12}>
              {items.map(item => (
                <>
                  <h1>{item.title}</h1>
                  <article dangerouslySetInnerHTML={{ __html: `${item.content}`}}></article>
                </>
              ))}
            </Grid>
          </Container>
        </>
      );
    }
  }

}

export default History;