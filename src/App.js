// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>eli olson .com</code>
        </p>
        <div className="links">
          <a
            className="spotify-link link"
            href="https://open.spotify.com/artist/0kXiWZgWKpdl8lYsZKelUW?si=vXt8P_t4RkG3iBlcp6f6Sw"
            target="_blank"
            rel="noopener noreferrer"
          >
            spotify
          </a>
          <a
            className="apple-music-link link"
            href="https://music.apple.com/us/artist/eli-olson/1509498872"
            target="_blank"
            rel="noopener noreferrer"
          >
            apple music
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
