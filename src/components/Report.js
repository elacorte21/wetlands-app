import React from 'react';
import emailjs from 'emailjs-com';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Image from '../assets/media/img-aw-06.jpg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Report() {
  const classes = useStyles();
  const imgStyle = {
    height: 180,
    background: 'url(' + Image + ') center / cover no-repeat',
  };

  function sendEmail1(e) {
    e.preventDefault();

    //emailjs.sendForm('service_muwahpc', 'template_dqpus98', e.target, 'user_iWbuCg24Ej3N5KWmC03Rr')
    emailjs.sendForm('service_ebqt17o', 'template_x3okemb', e.target, 'user_BV5XrQvn55PMWiaIv2TIZ')
    .then((result) => {
        console.log(result.text);
        //<Redirect to="/" />
        window.location.href = "/thankyou";
    }, (error) => {
        console.log(error.text);
    });
  }
  
  function sendEmail2(e) {
    e.preventDefault();

    //emailjs.sendForm('service_muwahpc', 'template_703e0as', e.target, 'user_iWbuCg24Ej3N5KWmC03Rr')
    emailjs.sendForm('service_ebqt17o', 'template_4zjtbvj', e.target, 'user_BV5XrQvn55PMWiaIv2TIZ')
      .then((result) => {
          console.log(result.text);
          window.location.href = "/thankyou";
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div style={imgStyle}></div>
      <Container maxWidth="sm" spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Report</h1>
            <div className={classes.root}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Vandalism and Graffiti</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form className="contact-form" onSubmit={sendEmail1}>
                    <input type="hidden" name="contact_number" />
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" label="Name" name="user_name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" label="Email" name="user_email" required type="email" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" multiline rows={4} label="Message" name="message" />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <input type="submit" value="Send" /> */}
                        <Button type="submit" variant="contained" color="primary" className="btn-green">Submit</Button>
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Illegal Rubbish Dumping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <form className="contact-form" onSubmit={sendEmail2}>
                    <input type="hidden" name="contact_number" />
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" label="Name" name="user_name" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" label="Email" name="user_email" required type="email" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="standard-basic" multiline rows={4} label="Message" name="message" />
                      </Grid>
                      <Grid item xs={12}>
                        {/* <input type="submit" value="Send" /> */}
                        <Button type="submit" variant="contained" color="primary" className="btn-green">Submit</Button>
                      </Grid>
                    </Grid>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );


}