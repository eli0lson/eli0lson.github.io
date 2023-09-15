// import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const SPOTIFY_LINK = "https://open.spotify.com/artist/0kXiWZgWKpdl8lYsZKelUW?si=vXt8P_t4RkG3iBlcp6f6Sw";
const APPLE_MUSIC_LINK = "https://music.apple.com/us/artist/eli-olson/1509498872";

const Header = () => {
  return (
    <div className="header">
        <Navbar className="mynav" variant='dark' bg='black' expanded='false'>
            <p className='navItem'>
            eli olson .com
            </p>
            <div className="links">
            <Button
                className="spotify-link link custom-btn"
                href={SPOTIFY_LINK}
                target="_blank">
                spotify
            </Button>
            <Button
                className="apple-music-link link custom-btn"
                href={APPLE_MUSIC_LINK}
                target="_blank">
                apple music
            </Button>
            </div>
        </Navbar>
    </div>
  );
}

export default Header;
