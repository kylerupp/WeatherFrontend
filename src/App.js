import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import Input from "./Input.js";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState([]);
  const [toggle, setToggle] = useState(false);

  const inputRef = useRef();
  const selectRef = useRef();

  const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      label: inputRef.current.value || "label",
      type: selectRef.current.value || "text",
      value: "",
    });
    setFormValues(values);
    setToggle(false);
  }

  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  }

  const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      formValues.map((val) => {
        return { [val.label]: val.value};
      })
    );
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
            deleteField={handleDeleteField}
          />
        ))}
        {!toggle ? (
          <div className="center">
            <button className="add-btn" onClick={addBtnClick}>
              Add new
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="label" ref={inputRef} />
            <select ref={selectRef}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
  /*return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."/>
        </div>
        <div>
          <div className="location-box">
            <div className="location">Home</div>
            <div className="date">test</div>
          </div>
        </div>
      </main>
    </div>
  )*/
  /*const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://196.168.86.108:5000/data?start=2023_01_01&end=2023_01_02`)
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
  );*/
}

export default App;