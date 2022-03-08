import React, {useState} from "react";
import Button from "./components/Button";
import Card from './components/Card';
import styled from 'styled-components';
import pic from './img/pic.jpg';

function App(props) {
  const viewBtn = <button className="btn btn-primary w-100 rounded-0">View Profile</button>;
  // const [name, setName] = useState('Richard Kweku Aikins');
  const [showCard, setShowCard] = useState(true);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Richard Aikins",
      title: "Chief Technology Officer",
      avatar: {pic}
    },
    {
      id: 2,
      name: "Benjamin Acquah",
      title: "Chief Lab Technician",
      avatar: {pic}
    },
    {
      id: 3,
      name: "Ophelia Acquah",
      title: "Entreprenuer",
      avatar: {pic}
    },

  ]);
  const deleteHandler = (index) => {
    const cards_copy = [...cards];
    cards_copy.splice(index, 1);
    setCards(cards_copy);
  }

  const toggleCard = () => setShowCard(!showCard);
  return (

    <div className="App">
      <Button />
      <button className="btn btn-success rounded" onClick={toggleCard}>Toggle</button>
    {
      showCard ?
          cards.map((cards, index) => <Card name={cards.name} title={cards.title} onDelete={() => deleteHandler(index)} key={ cards.id}/>)
      
      : null
    } 
    </div >
    
    )
}


export default App;