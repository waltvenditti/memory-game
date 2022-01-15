

function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <h1>Molecule Memory</h1>
        <h4>Click each image once - and only once.</h4>
      </div>
      <div className="headerRight">
        <p>Current Score: {props.score}</p>
        <p>High Score: Y</p>
      </div>
    </header>
  );
}

export default Header; 