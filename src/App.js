import React from 'react';

function Food({name}) {
  return <h1>I like {name}</h1>;
}

const foodIlike = [
  {id:1, name:"kimchi"},
  {id:2, name:"pizza"},
  {id:3, name:"chicken"},
  {id:4, name:"rice"},
  {id:5, name:"bread"}
];

function App(props) {
  return (
    <div>
      {foodIlike.map(dish => (
        <Food key={dish.id} name={dish.name}/> 
      ))}
    </div>
  );
}

export default App;
