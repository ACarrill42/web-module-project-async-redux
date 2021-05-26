import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {getRandomArtwork} from './actions/actions'

function App({art , ...props}) {
console.log(art)
  if (props.error) {
    return <h1>Error: {props.error}</h1>
  };

  if (props.isFetching) {
    return <h2>Fetching art for you</h2>
  }
  return (
    <div className="App">
      {art.length > 0 && <h2>{art[1].title}</h2>}
      {art.length > 0 && <img alt = {art.artist_title}>{art[1].image}</img>}
      {art.length > 0 && <h3>{art[1].artist_title}</h3>}
      {art.length > 0 && <h3>{art[1].place_of_origin}</h3>}
      <button onClick = {() => props.getRandomArtwork()}>Click for artwork</button>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state)
  return {
    art: state.art,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {getRandomArtwork})(App);
