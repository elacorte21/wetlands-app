import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ArrowBackIos';

import { getFirebase } from "../firebase";

const Plant = ({ match }) => {
    console.log(match);
    //const slug = match.params.slug;
    //console.log(slug + 'test')
    const plantId = match.params.slug;
    let lang = '/en-US'
    let fbpath = 'flamelink/environments/production/content/'
    
    const [loading, setLoading] = useState(true);
    const [currentPost, setCurrentPost] = useState();
    
    if (loading && !currentPost) {
        getFirebase()
        .database()
        .ref(fbpath + 'floraAndFauna' + lang)
        .child(plantId)
        .once("value")
        .then(snapshot => {
            if (snapshot.val()) {
                setCurrentPost(snapshot.val());
            }
            setLoading(false);
        });
    }

    
    console.log(currentPost)
    //console.log(`flamelink/environments/production/content/floraAndFauna/en-US/${slug}`)

    if (loading) {
        return <h1>Loading...</h1>;
    }

    const postDoesNotExist = !currentPost;
    
    if (postDoesNotExist) {
        //return <Redirect to="/404" />;
    }
    

    const imgStyle = {
        height: 100 + 'vh',
        background: 'url(' + currentPost.image + ') center / cover no-repeat'
    };


    return (
        <>
            <div style={imgStyle}>
                <div className="plantbox">
                    <h2>{currentPost.plantName}</h2>
                    <span>Latin:</span> {currentPost.latinName}
                </div>
            </div>
            <Button component={Link} to="/florafauna" variant="contained" className="btn-green btn-back" startIcon={<BackIcon />} >Back</Button>
        </>
    );
};

export default Plant;