import React from 'react';

function App() {

    const getData = () => {
        fetch("http://localhost:5000/endpoints")
            .then((response) => response.json())
            .then((actualdata) => console.log(actualdata));
  }

  return(
    <div>
      <h1>Hello World!</h1>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
