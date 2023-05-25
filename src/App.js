import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:5000/endpoints`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.endpoints);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    //<p>Hello World!</p>
    <div className="App">
      <tbody>
        <tr>
          <th>mac</th>
          <th>time</th>
          <th>last_online</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.mac}</td>
            <td>{item.time}</td>
            <td>{item.last_online}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;