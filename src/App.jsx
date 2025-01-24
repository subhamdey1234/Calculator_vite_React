import { useState } from 'react';
import './App.css';

function App() {
  const [value, setvalue] = useState('');

  const handlePercentage = () => {
    try {
      setvalue(String(eval(value)/100)); // Calculate percentage of the current value
    } catch {
      setvalue('Error'); // Handle invalid input
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <iframe src="https://giphy.com/embed/LfQaJo2wbxB6radlve" width="100" height="100" className="giphy-embed" allowFullScreen></iframe>
        <h1 className="heading">Subham's Calculator</h1>
        <iframe src="https://giphy.com/embed/cJFQJzZxFMhONxDTnt" width="100" height="100" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="inputs">
              <input type="text" value={value} readOnly />
            </div>
            <div>
              <input type="button" value="AC" onClick={() => setvalue('')} />
              <input type="button" value="DE" onClick={() => setvalue(value.slice(0, -1))} />
              <input type="button" value="." onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="/" onClick={(e) => setvalue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="7" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="8" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="9" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="*" onClick={(e) => setvalue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="4" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="5" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="6" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="+" onClick={(e) => setvalue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="1" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="2" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="3" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="-" onClick={(e) => setvalue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="0" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="00" onClick={(e) => setvalue(value + e.target.value)} />
              <input type="button" value="%" onClick={handlePercentage} />
              <input type="button" value="=" className="equal" onClick={() => setvalue(String(eval(value)))} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
