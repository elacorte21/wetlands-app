import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

const NoMatch = () => (
  <>
    <Container maxWidth="sm" spacing={3}>
      <Grid item xs={12}>
        <h1>Can't seem to find that page.</h1>
        <p><Link to="/">Take me home</Link></p>
      </Grid>
    </Container>
  </>
);

export default NoMatch;