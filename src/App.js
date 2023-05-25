import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:5000/data?start=2023_01_01&end=2023_01_02`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.data);
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
          <th>temp</th>
          <th>humidity</th>
          <th>time</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.mac}</td>
            <td>{item.temp}</td>
            <td>{item.humidity}</td>
            <td>{item.time}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;