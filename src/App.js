import React, {useState} from "react";
import Button from "./components/Button";
import Card from './components/Card';
// import "./styles/App.css";


function App(props) {
  const viewBtn = <button className="btn btn-primary w-100 rounded-0">View Profile</button>;
  const [name, setName] = useState('Richard Kweku Aikins');

  const setNameHandler = () => {
    setName('Benjamin Acquah');
  }
  return (

    <div className="App">
      <Button />
      <button className="btn btn-success rounded" onClick={setNameHandler}>Change Name</button>
      <Card name={name} onChangeName={setNameHandler}>{viewBtn}</Card>
      
    </div>
    )
}

export default App;