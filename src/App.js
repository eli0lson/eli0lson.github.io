// import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import heart_flower from './images/heart_flower.jpg';
import eli_mustache from './images/eli_mustache.jpg';

const SPOTIFY_LINK = "https://open.spotify.com/artist/0kXiWZgWKpdl8lYsZKelUW?si=vXt8P_t4RkG3iBlcp6f6Sw";
const APPLE_MUSIC_LINK = "https://music.apple.com/us/artist/eli-olson/1509498872";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar className="mynav" variant='dark' bg='black' expanded='false'>
          <p className='navItem'>
            eli olson .com
          </p>
          <div className="links">
            <Button
              className="spotify-link link custom-btn"
              href={SPOTIFY_LINK}
              target="_blank"
            >
              spotify
            </Button>
            <Button
              className="apple-music-link link custom-btn"
              href={APPLE_MUSIC_LINK}
              target="_blank"
            >
              apple music
            </Button>
          </div>
        </Navbar>
        {/* <img src={heart_flower} alt="heart flower"></img> */}
      </header>
      <body className='App-body'>
        <img src={heart_flower} alt="heart flower"></img>
        <img src={eli_mustache} alt="eli mustache"></img>
      </body>
    </div>
  );
}

export default App;
