import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px'
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
}

function Tile(props) {
  return (
    <button 
      style={style.letter} 
      onClick={() => props.onClick(props.letter)}
    >
      {props.letter}
    </button>
  );
}

function Application(props) {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutput = outputString + letter;

    // Check for three consecutive letters and replace with '_'
    const regex = /([A-Z])\1{2}/; // Matches three consecutive identical letters
    while (regex.test(newOutput)) {
      newOutput = newOutput.replace(regex, '_');
    }

    setOutputString(newOutput);
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {Array.from({ length: 26 }, (_, i) => (
          <Tile 
            key={i} 
            letter={String.fromCharCode(65 + i)} // Generate A-Z dynamically
            onClick={handleTileClick}
          />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
