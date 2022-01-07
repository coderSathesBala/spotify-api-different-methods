// axios-library
import axios from 'axios';
import React from 'react';
import SpotifyGetPlaylists from './spotifyGetPlaylists';

const CLIENT_ID = 'f25a526cf53d42c7b794db522c42ab98'
const SPOTIFY_AUTHORIZE_ENDPOINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URL_AFTER_LOGIN = 'http://localhost:3000/webapp'
const SPACE_DELIMITER= '%20'
const SCOPES = ['user-read-currently-playing', 'user-read-playback-state']
const SCOPES_URL_PARAM = SCOPES.join('%20')

// http://localhost:3000/webapp#access_token=BQBESRBYqD4zBc6OJhHxx36vaF6zIvvDmQ9mOZ4tln6cME4U0sUMp1N2rOm0zb4McjEgFeeOVOQ36aKFSE0TRSYiOcVGr8abzNZLB_XIxf_70QX2SqIJExhzpxtkorwdyN5FWLRFC-bwxzFIn5zwSg&token_type=Bearer&expires_in=3600




const getReturnedParamsFromSpotifyAuth = (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&")
    const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
        console.log(currentValue)
        const[key,value] = currentValue.split('=');
        accumulator[key] = value;
        return accumulator;
    }, {});
    return paramsSplitUp;
};



const PersonList = () => {
    React.useEffect(() => {
        if(window.location.hash) {
            const {
                access_token,
                expires_in,
                token_type
            } = getReturnedParamsFromSpotifyAuth(window.location.hash);
        
            localStorage.clear();

            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("tokenType", token_type);
            localStorage.setItem("expiresIn", expires_in);
        }
    });


    const handleLogIn = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog='true`
        // window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    }
         return(
             <div>
                 <button onClick={handleLogIn}
                 >Sign-In With Spotify</button>
                 <h1>DISPLAY ARTIST NAME:</h1>
          <h1>DISPLAY ARTIST PICTURE:</h1>
          <h1>DISPLAY ARTIST ALBUM:</h1>
          <h1>DISPLAY ALBUM PICTURE:</h1>
          <h1>DISPLAY ALBUM TRACKLIST:</h1>
          <h1>DISPLAY ALBUM INFO:</h1>
             </div>
         )
}

export default PersonList;