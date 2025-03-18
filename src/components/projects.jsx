import React from 'react'
import { useEffect, useState } from "react";
import Card from '../components/card';



const projects = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => { 
    fetch("/projects.json") 
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);
  
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
      {cards.map((card) => (
        <Card key={card.id} image={card.image} title={card.title} description={card.description} github={card.github}
        website={card.site} />
      ))}
    </div>
  )
}

export default projects
